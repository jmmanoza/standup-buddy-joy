import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerDisplayProps {
  initialMinutes?: number;
  onComplete?: () => void;
  onStart?: () => void;
  className?: string;
}

export function TimerDisplay({ 
  initialMinutes = 30, 
  onComplete, 
  onStart,
  className = ""
}: TimerDisplayProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleStart = () => {
    setIsRunning(true);
    setIsCompleted(false);
    onStart?.();
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(initialMinutes * 60);
    setIsRunning(false);
    setIsCompleted(false);
  };

  return (
    <div className={`text-center space-y-6 ${className}`}>
      {/* Timer Display */}
      <div className={`font-display text-6xl transition-all duration-300 ${
        isCompleted ? 'text-success animate-bounce-in' : 
        timeLeft < 300 ? 'text-warning animate-pulse' :
        'text-foreground'
      }`}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      {/* Status Message */}
      <div className="text-lg text-muted-foreground">
        {isCompleted ? (
          <span className="text-success font-semibold">Time to stand up! 🎉</span>
        ) : isRunning ? (
          "Timer is running..."
        ) : (
          "Ready to start your focus session"
        )}
      </div>

      {/* Timer Controls */}
      <div className="flex justify-center space-x-4">
        {!isRunning ? (
          <button 
            onClick={handleStart}
            className="btn-primary flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Start Timer</span>
          </button>
        ) : (
          <button 
            onClick={handlePause}
            className="btn-secondary flex items-center space-x-2"
          >
            <Pause className="w-5 h-5" />
            <span>Pause</span>
          </button>
        )}
        
        <button 
          onClick={handleReset}
          className="btn-accent flex items-center space-x-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}