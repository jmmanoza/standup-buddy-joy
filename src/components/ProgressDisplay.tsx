import { UserStats } from '@/types/character';
import { Clock, Target, TrendingUp, Award } from 'lucide-react';

interface ProgressDisplayProps {
  stats: UserStats;
}

export function ProgressDisplay({ stats }: ProgressDisplayProps) {
  const dailyProgress = (stats.dailyStandMinutes / stats.dailyGoal) * 100;
  const weeklyProgress = (stats.weeklyStandMinutes / stats.weeklyGoal) * 100;

  return (
    <div className="space-y-6">
      {/* Daily Progress */}
      <div className="bg-card rounded-3xl p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg text-foreground">Today's Goal</h3>
          </div>
          <div className="text-sm text-muted-foreground">
            {Math.round(dailyProgress)}%
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{stats.dailyStandMinutes} / {stats.dailyGoal} minutes</span>
            <span>{Math.max(0, stats.dailyGoal - stats.dailyStandMinutes)} min left</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(dailyProgress, 100)}%` }}
            />
          </div>
        </div>

        {dailyProgress >= 100 && (
          <div className="mt-3 text-center text-success font-medium animate-bounce-in">
            🎉 Daily goal completed! Amazing work!
          </div>
        )}
      </div>

      {/* Weekly Progress */}
      <div className="bg-card rounded-3xl p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <h3 className="font-display text-lg text-foreground">This Week</h3>
          </div>
          <div className="text-sm text-muted-foreground">
            {Math.round(weeklyProgress)}%
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{Math.round(stats.weeklyStandMinutes / 60)}h {stats.weeklyStandMinutes % 60}m</span>
            <span>Goal: {Math.round(stats.weeklyGoal / 60)}h</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill bg-gradient-to-r from-accent to-primary" 
              style={{ width: `${Math.min(weeklyProgress, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 border border-primary/20">
        <div className="flex items-center space-x-2 mb-3">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg text-foreground">Perfect Timing</h3>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>💡 Sit for 50-60 minutes, then stand for 15-20 minutes</p>
          <p>🎯 Aim for 2 hours of standing during an 8-hour workday</p>
          <p>⚖️ Try alternating 30 minutes sitting ↔ 30 minutes standing</p>
        </div>
      </div>
    </div>
  );
}