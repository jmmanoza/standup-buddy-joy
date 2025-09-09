import { Reminder } from '@/types/character';
import { Clock, CheckCircle, XCircle, Star } from 'lucide-react';
import { format } from 'date-fns';

interface TimelineProps {
  reminders: Reminder[];
}

export function Timeline({ reminders }: TimelineProps) {
  return (
    <div className="min-h-screen bg-gradient-bg-primary pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="font-display text-3xl text-foreground">Your Journey</h1>
          <p className="text-muted-foreground">See how far you've come! 🌟</p>
        </header>

        {/* Timeline */}
        <div className="space-y-4">
          {reminders.length === 0 ? (
            <div className="text-center space-y-4 py-12">
              <div className="w-24 h-24 mx-auto opacity-50">
                <Clock className="w-full h-full text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">No reminders yet!</h3>
                <p className="text-muted-foreground">Start your first timer to begin your journey.</p>
              </div>
            </div>
          ) : (
            reminders.map((reminder, index) => (
              <div
                key={reminder.id}
                className={`message-bubble animate-bounce-in ${
                  reminder.completed ? 'success' : 'missed'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-start space-x-4">
                  {/* Character Avatar */}
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src={reminder.character.image} 
                      alt={reminder.character.name}
                      className={`w-full h-full object-contain ${
                        reminder.completed ? 'animate-wiggle' : 'opacity-60'
                      }`}
                    />
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg text-foreground">
                        {reminder.character.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        {reminder.completed ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-success" />
                            {reminder.xpEarned && (
                              <span className="badge-xp text-xs">
                                +{reminder.xpEarned} XP
                              </span>
                            )}
                          </>
                        ) : (
                          <XCircle className="w-4 h-4 text-warning" />
                        )}
                      </div>
                    </div>

                    <p className="text-foreground">{reminder.message}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{format(reminder.timestamp, 'MMM dd, yyyy')}</span>
                      <span>{format(reminder.timestamp, 'h:mm a')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Weekly Summary */}
        {reminders.length > 0 && (
          <div className="bg-card rounded-3xl p-6 shadow-card">
            <h3 className="font-display text-xl text-foreground mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-accent" />
              This Week
            </h3>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="font-display text-2xl text-success">
                  {reminders.filter(r => r.completed).length}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="space-y-1">
                <div className="font-display text-2xl text-warning">
                  {reminders.filter(r => !r.completed).length}
                </div>
                <div className="text-xs text-muted-foreground">Missed</div>
              </div>
              <div className="space-y-1">
                <div className="font-display text-2xl text-accent">
                  {Math.round((reminders.filter(r => r.completed).length / reminders.length) * 100) || 0}%
                </div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}