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
}