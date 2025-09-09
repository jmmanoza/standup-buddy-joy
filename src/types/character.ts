export interface Character {
  id: string;
  name: string;
  description: string;
  image: string;
  personality: 'energetic' | 'calm' | 'playful' | 'wise';
  colors: {
    primary: string;
    secondary: string;
  };
  evolutions?: CharacterEvolution[];
}

export interface CharacterEvolution {
  level: number;
  name: string;
  description: string;
  image?: string;
  unlockMessage: string;
}

export interface Reminder {
  id: string;
  timestamp: Date;
  completed: boolean;
  character: Character;
  message: string;
  xpEarned?: number;
}

export interface UserStats {
  currentStreak: number;
  totalXP: number;
  level: number;
  completedReminders: number;
  missedReminders: number;
  dailyGoal: number;
  weeklyGoal: number;
  dailyStandMinutes: number;
  weeklyStandMinutes: number;
  longestStreak: number;
  unlockedAchievements: string[];
  streakBonusMultiplier: number;
}

export interface WeeklyProgress {
  week: string;
  totalStandMinutes: number;
  completedReminders: number;
  streakDays: number;
  xpEarned: number;
  achievements: string[];
}