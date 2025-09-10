export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'streak' | 'level' | 'activity' | 'special';
  requirement: string;
  points: number;
}

export const achievements: Achievement[] = [
  // Streak Achievements
  {
    id: 'first-stretch',
    title: 'First Stretch',
    description: 'Complete your very first reminder',
    icon: '🌟',
    category: 'streak',
    requirement: 'Complete 1 reminder',
    points: 10,
  },
  {
    id: 'streak-master-3',
    title: 'Streak Master',
    description: 'Maintain a 3-day streak',
    icon: '🔥',
    category: 'streak',
    requirement: 'Reach 3-day streak',
    points: 25,
  },
  {
    id: 'streak-master-5',
    title: 'Streak Warrior',
    description: 'Maintain a 5-day streak',
    icon: '⚡',
    category: 'streak',
    requirement: 'Reach 5-day streak',
    points: 50,
  },
  {
    id: 'streak-master-10',
    title: 'Streak Legend',
    description: 'Maintain a 10-day streak',
    icon: '👑',
    category: 'streak',
    requirement: 'Reach 10-day streak',
    points: 100,
  },
  {
    id: 'streak-master-30',
    title: 'Consistency King',
    description: 'Maintain a 30-day streak',
    icon: '💎',
    category: 'streak',
    requirement: 'Reach 30-day streak',
    points: 300,
  },
  
  // Level Achievements
  {
    id: 'level-5',
    title: 'Rising Star',
    description: 'Reach level 5',
    icon: '⭐',
    category: 'level',
    requirement: 'Reach level 5',
    points: 50,
  },
  {
    id: 'level-10',
    title: 'Seasoned Pro',
    description: 'Reach level 10',
    icon: '🎖️',
    category: 'level',
    requirement: 'Reach level 10',
    points: 100,
  },
  {
    id: 'level-20',
    title: 'Master Stretcher',
    description: 'Reach level 20',
    icon: '🏆',
    category: 'level',
    requirement: 'Reach level 20',
    points: 200,
  },
  
  // Activity Achievements
  {
    id: 'century-club',
    title: 'Century Club',
    description: 'Complete 100 reminders',
    icon: '💯',
    category: 'activity',
    requirement: 'Complete 100 reminders',
    points: 150,
  },
  {
    id: 'daily-hero',
    title: 'Daily Hero',
    description: 'Meet your daily goal',
    icon: '🦸‍♂️',
    category: 'activity',
    requirement: 'Complete daily goal',
    points: 25,
  },
  {
    id: 'weekly-warrior',
    title: 'Weekly Warrior',
    description: 'Meet your weekly goal',
    icon: '⚔️',
    category: 'activity',
    requirement: 'Complete weekly goal',
    points: 75,
  },
  {
    id: 'healthy-spine',
    title: 'Healthy Spine',
    description: 'Stand for 2+ hours in a day',
    icon: '🦴',
    category: 'activity',
    requirement: 'Stand for 120+ minutes in one day',
    points: 40,
  },
  
  // Special Achievements
  {
    id: 'early-bird',
    title: 'Early Bird',
    description: 'Complete a reminder before 9 AM',
    icon: '🐦',
    category: 'special',
    requirement: 'Complete reminder before 9 AM',
    points: 20,
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Complete a reminder after 8 PM',
    icon: '🦉',
    category: 'special',
    requirement: 'Complete reminder after 8 PM',
    points: 20,
  },
  {
    id: 'focus-master',
    title: 'Focus Master',
    description: 'Complete 5 reminders in one day',
    icon: '🎯',
    category: 'special',
    requirement: 'Complete 5 reminders in one day',
    points: 60,
  },
];