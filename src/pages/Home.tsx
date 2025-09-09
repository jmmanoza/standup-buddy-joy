import { useState } from 'react';
import { Character, UserStats } from '@/types/character';
import { characters, motivationalMessages } from '@/data/characters';
import { TimerDisplay } from '@/components/TimerDisplay';
import { StatsDisplay } from '@/components/StatsDisplay';
import { CharacterSelector } from '@/components/CharacterSelector';
import { useToast } from '@/hooks/use-toast';

interface HomeProps {
  selectedCharacter: Character;
  onSelectCharacter: (character: Character) => void;
  stats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
}

export function Home({ selectedCharacter, onSelectCharacter, stats, onUpdateStats }: HomeProps) {
  const [showCharacterSelector, setShowCharacterSelector] = useState(false);
  const { toast } = useToast();

  const handleTimerComplete = () => {
    const xpGained = 10;
    const newStats = {
      ...stats,
      totalXP: stats.totalXP + xpGained,
      completedReminders: stats.completedReminders + 1,
      currentStreak: stats.currentStreak + 1,
      level: Math.floor((stats.totalXP + xpGained) / 100) + 1,
    };
    
    onUpdateStats(newStats);
    
    const successMessage = motivationalMessages.success[
      Math.floor(Math.random() * motivationalMessages.success.length)
    ];

    toast({
      title: "Great job! 🎉",
      description: `${successMessage} You earned ${xpGained} XP!`,
      duration: 4000,
    });
  };

  const handleTimerStart = () => {
    const reminderMessage = motivationalMessages.reminder[
      Math.floor(Math.random() * motivationalMessages.reminder.length)
    ];

    toast({
      title: "Timer started! ⏰",
      description: reminderMessage,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg-primary pb-20">
      <div className="max-w-md mx-auto p-6 space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="font-display text-3xl text-foreground">
            Stand Up Buddy
          </h1>
          <p className="text-muted-foreground">
            Your friendly reminder to stay healthy! 💚
          </p>
        </header>

        {/* Character Display */}
        <div className="text-center space-y-4">
          <div 
            className="w-24 h-24 mx-auto cursor-pointer animate-float hover:animate-wiggle transition-all duration-300 hover:scale-110"
            onClick={() => setShowCharacterSelector(!showCharacterSelector)}
          >
            <img 
              src={selectedCharacter.image} 
              alt={selectedCharacter.name}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">{selectedCharacter.name}</h2>
            <p className="text-sm text-muted-foreground">{selectedCharacter.description}</p>
            <button 
              className="text-xs text-primary hover:text-primary-light mt-1"
              onClick={() => setShowCharacterSelector(!showCharacterSelector)}
            >
              Tap to change buddy
            </button>
          </div>
        </div>

        {/* Character Selector */}
        {showCharacterSelector && (
          <div className="animate-bounce-in">
            <CharacterSelector 
              characters={characters}
              selectedCharacter={selectedCharacter}
              onSelectCharacter={(character) => {
                onSelectCharacter(character);
                setShowCharacterSelector(false);
              }}
            />
          </div>
        )}

        {/* Timer */}
        <div className="bg-card rounded-3xl p-6 shadow-card">
          <TimerDisplay 
            initialMinutes={30}
            onComplete={handleTimerComplete}
            onStart={handleTimerStart}
          />
        </div>

        {/* Stats */}
        <div className="bg-card rounded-3xl p-6 shadow-card">
          <StatsDisplay stats={stats} />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="btn-secondary">
            Quick Stand 🧘‍♂️
          </button>
          <button className="btn-accent">
            Stretch Guide 🤸‍♀️
          </button>
        </div>
      </div>
    </div>
  );
}