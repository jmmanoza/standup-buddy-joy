import { Trophy, Star, Target, Award, Crown, Zap } from 'lucide-react';
import { UserStats } from '@/types/character';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AchievementsProps {
  stats: UserStats;
}

export function Achievements({ stats }: AchievementsProps) {
  const achievements: Achievement[] = [
    {
      id: 'first-stretch',
      title: 'First Stretch',
      description: 'Complete your very first reminder',
      icon: Star,
      unlocked: stats.completedReminders >= 1,
      rarity: 'common',
    },
    {
      id: 'streak-master-3',
      title: 'Streak Master',
      description: 'Maintain a 3-day streak',
      icon: Trophy,
      unlocked: stats.currentStreak >= 3,
      progress: Math.min(stats.currentStreak, 3),
      maxProgress: 3,
      rarity: 'common',
    },
    {
      id: 'streak-legend-7',
      title: 'Streak Legend',
      description: 'Maintain a 7-day streak',
      icon: Crown,
      unlocked: stats.currentStreak >= 7,
      progress: Math.min(stats.currentStreak, 7),
      maxProgress: 7,
      rarity: 'rare',
    },
    {
      id: 'streak-warrior-14',
      title: 'Streak Warrior',
      description: 'Maintain a 14-day streak',
      icon: Award,
      unlocked: stats.currentStreak >= 14,
      progress: Math.min(stats.currentStreak, 14),
      maxProgress: 14,
      rarity: 'epic',
    },
    {
      id: 'streak-champion-30',
      title: 'Streak Champion',
      description: 'Maintain a 30-day streak',
      icon: Crown,
      unlocked: stats.currentStreak >= 30,
      progress: Math.min(stats.currentStreak, 30),
      maxProgress: 30,
      rarity: 'legendary',
    },
    {
      id: 'daily-goal-master',
      title: 'Daily Goal Master',
      description: 'Complete your daily standing goal',
      icon: Target,
      unlocked: stats.dailyStandMinutes >= stats.dailyGoal,
      progress: Math.min(stats.dailyStandMinutes, stats.dailyGoal),
      maxProgress: stats.dailyGoal,
      rarity: 'common',
    },
    {
      id: 'weekly-warrior',
      title: 'Weekly Warrior',
      description: 'Complete your weekly standing goal',
      icon: Award,
      unlocked: stats.weeklyStandMinutes >= stats.weeklyGoal,
      progress: Math.min(stats.weeklyStandMinutes, stats.weeklyGoal),
      maxProgress: stats.weeklyGoal,
      rarity: 'rare',
    },
    {
      id: 'healthy-spine',
      title: 'Healthy Spine Hero',
      description: 'Stand for 2+ hours in a workday',
      icon: Trophy,
      unlocked: stats.dailyStandMinutes >= 120,
      progress: Math.min(stats.dailyStandMinutes, 120),
      maxProgress: 120,
      rarity: 'common',
    },
    {
      id: 'focus-master',
      title: 'Focus Master',
      description: 'Perfect work-break balance (follow timing formula)',
      icon: Zap,
      unlocked: stats.completedReminders >= 10 && stats.currentStreak >= 5,
      rarity: 'rare',
    },
    {
      id: 'evolution-unlocked',
      title: 'Evolution Master',
      description: 'Unlock your first character evolution',
      icon: Crown,
      unlocked: stats.level >= 5,
      rarity: 'epic',
    },
    {
      id: 'century-club',
      title: 'Century Club',
      description: 'Complete 100 reminders',
      icon: Target,
      unlocked: stats.completedReminders >= 100,
      progress: Math.min(stats.completedReminders, 100),
      maxProgress: 100,
      rarity: 'epic',
    },
    {
      id: 'xp-master',
      title: 'XP Master',
      description: 'Reach 500 total XP',
      icon: Zap,
      unlocked: stats.totalXP >= 500,
      progress: Math.min(stats.totalXP, 500),
      maxProgress: 500,
      rarity: 'rare',
    },
    {
      id: 'level-10',
      title: 'Rising Star',
      description: 'Reach level 10',
      icon: Award,
      unlocked: stats.level >= 10,
      progress: Math.min(stats.level, 10),
      maxProgress: 10,
      rarity: 'epic',
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-muted-foreground bg-muted/20';
      case 'rare': return 'text-primary bg-primary/20';
      case 'epic': return 'text-accent bg-accent/20';
      case 'legendary': return 'text-warning bg-warning/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-muted';
      case 'rare': return 'border-primary/30';
      case 'epic': return 'border-accent/30';
      case 'legendary': return 'border-warning/30';
      default: return 'border-muted';
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="min-h-screen bg-gradient-bg-primary pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="font-display text-3xl text-foreground">Achievements</h1>
          <p className="text-muted-foreground">Your progress and milestones 🏆</p>
          
          {/* Progress Summary */}
          <div className="bg-card rounded-3xl p-4 shadow-card">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="font-display text-2xl text-primary">{unlockedCount}</div>
                <div className="text-sm text-muted-foreground">Unlocked</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="font-display text-2xl text-accent">{achievements.length - unlockedCount}</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
            </div>
          </div>
        </header>

        {/* Achievements Grid */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <div
                key={achievement.id}
                className={`bg-card rounded-3xl p-6 shadow-card transition-all duration-300 border-2 ${
                  achievement.unlocked 
                    ? `${getRarityBorder(achievement.rarity)} hover:scale-105 animate-bounce-in` 
                    : 'border-border opacity-60'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-start space-x-4">
                  {/* Achievement Icon */}
                  <div className={`p-3 rounded-2xl ${getRarityColor(achievement.rarity)} ${
                    achievement.unlocked ? 'animate-wiggle' : ''
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Achievement Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-display text-lg ${
                        achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </h3>
                      {achievement.unlocked && (
                        <div className="text-success">
                          <Trophy className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    <p className={`text-sm ${
                      achievement.unlocked ? 'text-muted-foreground' : 'text-muted-foreground/60'
                    }`}>
                      {achievement.description}
                    </p>

                    {/* Progress Bar (if applicable) */}
                    {achievement.maxProgress && achievement.progress !== undefined && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{achievement.progress} / {achievement.maxProgress}</span>
                          <span>{Math.round((achievement.progress / achievement.maxProgress) * 100)}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Rarity Badge */}
                    <div className="flex justify-end">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
                        getRarityColor(achievement.rarity)
                      }`}>
                        {achievement.rarity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Message */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 border border-primary/20">
          <div className="text-center space-y-2">
            <h3 className="font-display text-lg text-foreground">Keep Going! 🌟</h3>
            <p className="text-sm text-muted-foreground">
              Every reminder completed is a step towards a healthier you. 
              {unlockedCount < achievements.length && ` ${achievements.length - unlockedCount} more achievements await!`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}