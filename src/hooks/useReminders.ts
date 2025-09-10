import { useState, useEffect, useCallback } from 'react';
import { motivationalMessages } from '@/data/characters';

interface ReminderSettings {
  reminderInterval: number;
  soundEnabled: boolean;
  volume: number;
  notificationStyle: 'gentle' | 'energetic' | 'minimal';
}

interface UseRemindersProps {
  settings: ReminderSettings;
  onReminder: () => void;
}

export function useReminders({ settings, onReminder }: UseRemindersProps) {
  const [isActive, setIsActive] = useState(false);
  const [nextReminderTime, setNextReminderTime] = useState<Date | null>(null);

  const scheduleNextReminder = useCallback(() => {
    if (!isActive) return;
    
    const now = new Date();
    const nextTime = new Date(now.getTime() + settings.reminderInterval * 60 * 1000);
    setNextReminderTime(nextTime);
  }, [isActive, settings.reminderInterval]);

  const startReminders = () => {
    setIsActive(true);
    scheduleNextReminder();
  };

  const stopReminders = () => {
    setIsActive(false);
    setNextReminderTime(null);
  };

  const playNotificationSound = useCallback(() => {
    if (!settings.soundEnabled) return;
    
    // Create a simple notification sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(settings.volume / 100 * 0.1, audioContext.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.log('Could not play notification sound:', error);
    }
  }, [settings.soundEnabled, settings.volume]);

  const triggerReminder = useCallback(() => {
    playNotificationSound();
    
    // Show browser notification if permission granted
    if ('Notification' in window && Notification.permission === 'granted') {
      const message = motivationalMessages.reminder[
        Math.floor(Math.random() * motivationalMessages.reminder.length)
      ];
      
      new Notification('Stand Up Buddy', {
        body: message,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
      });
    }
    
    onReminder();
    scheduleNextReminder();
  }, [playNotificationSound, onReminder, scheduleNextReminder]);

  // Request notification permission when component mounts
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Handle reminder timing
  useEffect(() => {
    if (!isActive || !nextReminderTime) return;

    const checkTime = () => {
      const now = new Date();
      if (now >= nextReminderTime) {
        triggerReminder();
      }
    };

    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, [isActive, nextReminderTime, triggerReminder]);

  const getTimeUntilNext = (): string => {
    if (!nextReminderTime) return '';
    
    const now = new Date();
    const diff = nextReminderTime.getTime() - now.getTime();
    
    if (diff <= 0) return 'Soon';
    
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    isActive,
    nextReminderTime,
    timeUntilNext: getTimeUntilNext(),
    startReminders,
    stopReminders,
    triggerReminder,
  };
}