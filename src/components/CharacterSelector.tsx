import { Character } from '@/types/character';

interface CharacterSelectorProps {
  characters: Character[];
  selectedCharacter: Character;
  onSelectCharacter: (character: Character) => void;
}

export function CharacterSelector({ characters, selectedCharacter, onSelectCharacter }: CharacterSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl text-foreground">Choose Your Buddy</h3>
      <div className="grid grid-cols-2 gap-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character-card ${character.id === selectedCharacter.id ? 'active' : ''}`}
            onClick={() => onSelectCharacter(character)}
          >
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto animate-float">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground">{character.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{character.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}