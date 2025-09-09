import { UserStats } from '@/types/character';
import { Flame, Trophy, Target, Star } from 'lucide-react';

interface StatsDisplayProps {
  stats: UserStats;
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  const progressToNextLevel = ((stats.totalXP % 100) / 100) * 100;

  return (
    <div className="space-y-4">
      {/* Streak and Level */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 badge-streak animate-pulse-glow">
          <Flame className="w-4 h-4" />
          <span>{stats.currentStreak} day streak!</span>
        </div>
        <div className="flex items-center space-x-2 badge-xp">
          <Star className="w-4 h-4" />
          <span>Level {stats.level}</span>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{stats.totalXP % 100} / 100 XP</span>
          <span>Level {stats.level + 1}</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressToNextLevel}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card rounded-2xl p-4 text-center shadow-card">
          <Trophy className="w-6 h-6 mx-auto mb-2 text-success" />
          <div className="font-display text-2xl text-foreground">{stats.completedReminders}</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center shadow-card">
          <Target className="w-6 h-6 mx-auto mb-2 text-accent" />
          <div className="font-display text-2xl text-foreground">{stats.totalXP}</div>
          <div className="text-sm text-muted-foreground">Total XP</div>
        </div>
      </div>
    </div>
  );
}