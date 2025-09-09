import { Home, Clock, Settings, Trophy } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'timeline', icon: Clock, label: 'History' },
    { id: 'achievements', icon: Trophy, label: 'Rewards' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-sm">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-200 ${
                isActive 
                  ? 'bg-gradient-to-br from-primary/20 to-accent/20 text-primary scale-110' 
                  : 'text-muted-foreground hover:text-foreground hover:scale-105'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'animate-wiggle' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}