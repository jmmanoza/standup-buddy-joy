import { useState, useEffect } from 'react';
import { Character, UserStats, Reminder } from '@/types/character';
import { characters } from '@/data/characters';
import { Home } from '@/pages/Home';
import { Timeline } from '@/pages/Timeline';
import { Achievements } from '@/pages/Achievements';
import { Settings } from '@/pages/Settings';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  // State management
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characters[0]);
  const [stats, setStats] = useState<UserStats>({
    currentStreak: 3,
    totalXP: 150,
    level: 2,
    completedReminders: 15,
    missedReminders: 2,
    dailyGoal: 120, // 2 hours in minutes
    weeklyGoal: 840, // 14 hours in minutes
    dailyStandMinutes: 85,
    weeklyStandMinutes: 420,
    longestStreak: 7,
    unlockedAchievements: ['first-stretch', 'streak-master-3'],
    streakBonusMultiplier: 1.0,
  });
  const [settings, setSettings] = useState({
    reminderInterval: 30,
    soundEnabled: true,
    volume: 70,
    notificationStyle: 'energetic' as const,
    theme: 'auto' as const,
  });
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      completed: true,
      character: characters[0],
      message: "Great job stretching! You're doing amazing! 🌟",
      xpEarned: 10,
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
      completed: false,
      character: characters[0],
      message: "Don't worry about missing this one. Tomorrow is a new day! 💪",
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
      completed: true,
      character: characters[1],
      message: "Wonderful stretching session! Keep up the great work! ⭐",
      xpEarned: 10,
    },
  ]);

  // Load saved data on mount
  useEffect(() => {
    const savedCharacter = localStorage.getItem('selectedCharacter');
    const savedStats = localStorage.getItem('userStats');
    const savedSettings = localStorage.getItem('appSettings');
    const savedReminders = localStorage.getItem('reminders');

    if (savedCharacter) {
      const character = characters.find(c => c.id === savedCharacter);
      if (character) setSelectedCharacter(character);
    }
    
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
    
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    
    if (savedReminders) {
      setReminders(JSON.parse(savedReminders).map((r: any) => ({
        ...r,
        timestamp: new Date(r.timestamp),
      })));
    }
  }, []);

  // Save data when it changes
  useEffect(() => {
    localStorage.setItem('selectedCharacter', selectedCharacter.id);
  }, [selectedCharacter]);

  useEffect(() => {
    localStorage.setItem('userStats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            selectedCharacter={selectedCharacter}
            onSelectCharacter={setSelectedCharacter}
            stats={stats}
            onUpdateStats={setStats}
          />
        );
      case 'timeline':
        return <Timeline reminders={reminders} />;
      case 'achievements':
        return <Achievements stats={stats} />;
      case 'settings':
        return <Settings settings={settings} onUpdateSettings={setSettings} />;
      default:
        return (
          <Home
            selectedCharacter={selectedCharacter}
            onSelectCharacter={setSelectedCharacter}
            stats={stats}
            onUpdateStats={setStats}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg-primary">
      {renderCurrentPage()}
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
      />
    </div>
  );
};

export default Index;
