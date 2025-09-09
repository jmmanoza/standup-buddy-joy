import { Character, CharacterEvolution as Evolution } from '@/types/character';
import { Star, Crown, Zap } from 'lucide-react';

interface CharacterEvolutionProps {
  character: Character;
  currentLevel: number;
  onEvolutionUnlock?: (evolution: Evolution) => void;
}

export function CharacterEvolution({ character, currentLevel }: CharacterEvolutionProps) {
  if (!character.evolutions) return null;

  const currentEvolution = character.evolutions
    .filter(evo => evo.level <= currentLevel)
    .sort((a, b) => b.level - a.level)[0];

  const nextEvolution = character.evolutions
    .find(evo => evo.level > currentLevel);

  const getEvolutionIcon = (level: number) => {
    if (level >= 20) return Crown;
    if (level >= 10) return Zap;
    return Star;
  };

  return (
    <div className="space-y-4">
      {/* Current Evolution Status */}
      {currentEvolution && (
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 border border-primary/20">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto">
              <img 
                src={character.image} 
                alt={currentEvolution.name}
                className="w-full h-full object-contain drop-shadow-lg animate-float"
              />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground">{currentEvolution.name}</h3>
              <p className="text-sm text-muted-foreground">{currentEvolution.description}</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center space-x-1 bg-primary/20 rounded-full px-3 py-1">
                {(() => {
                  const Icon = getEvolutionIcon(currentEvolution.level);
                  return <Icon className="w-4 h-4 text-primary" />;
                })()}
                <span className="text-sm font-medium text-primary">Level {currentEvolution.level}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Evolution Preview */}
      {nextEvolution && (
        <div className="bg-card rounded-3xl p-6 shadow-card border border-dashed border-muted">
          <div className="text-center space-y-3 opacity-60">
            <div className="w-12 h-12 mx-auto bg-muted/20 rounded-full flex items-center justify-center">
              {(() => {
                const Icon = getEvolutionIcon(nextEvolution.level);
                return <Icon className="w-6 h-6 text-muted-foreground" />;
              })()}
            </div>
            <div>
              <h4 className="font-display text-lg text-muted-foreground">Next Evolution</h4>
              <p className="font-medium text-foreground">{nextEvolution.name}</p>
              <p className="text-sm text-muted-foreground">{nextEvolution.description}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Unlock at Level {nextEvolution.level}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${Math.min((currentLevel / nextEvolution.level) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* All Evolutions Timeline */}
      <div className="bg-card rounded-3xl p-6 shadow-card">
        <h4 className="font-display text-lg text-foreground mb-4">Evolution Path</h4>
        <div className="space-y-3">
          {character.evolutions.map((evolution, index) => {
            const Icon = getEvolutionIcon(evolution.level);
            const isUnlocked = evolution.level <= currentLevel;
            const isCurrent = currentEvolution?.level === evolution.level;

            return (
              <div 
                key={evolution.level}
                className={`flex items-center space-x-3 p-3 rounded-2xl transition-all duration-300 ${
                  isCurrent ? 'bg-primary/10 border border-primary/20' :
                  isUnlocked ? 'bg-success/10' : 'bg-muted/20'
                }`}
              >
                <div className={`p-2 rounded-full ${
                  isCurrent ? 'bg-primary text-primary-foreground' :
                  isUnlocked ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className={`font-medium ${
                    isUnlocked ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {evolution.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Level {evolution.level}
                  </div>
                </div>
                {isCurrent && (
                  <div className="text-xs text-primary font-medium">Current</div>
                )}
                {isUnlocked && !isCurrent && (
                  <div className="text-xs text-success">✓</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}