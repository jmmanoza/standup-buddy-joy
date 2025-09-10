import { Bell, Clock, Palette, Volume2, VolumeX, Smartphone } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';

interface SettingsProps {
  settings: {
    reminderInterval: number;
    soundEnabled: boolean;
    volume: number;
    notificationStyle: 'gentle' | 'energetic' | 'minimal';
    theme: 'auto' | 'light' | 'dark';
  };
  onUpdateSettings: (settings: any) => void;
}

export function Settings({ settings, onUpdateSettings }: SettingsProps) {
  const { theme, setTheme } = useTheme();
  
  const updateSetting = (key: string, value: any) => {
    onUpdateSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg-primary pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="font-display text-3xl text-foreground">Settings</h1>
          <p className="text-muted-foreground">Customize your experience 🎛️</p>
        </header>

        {/* Reminder Settings */}
        <div className="bg-card rounded-3xl p-6 shadow-card space-y-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl text-foreground">Reminders</h2>
          </div>

          <div className="space-y-4">
            {/* Reminder Interval */}
            <div className="space-y-3">
              <label className="text-foreground font-medium">Reminder Interval</label>
              <Select 
                value={settings.reminderInterval.toString()} 
                onValueChange={(value) => updateSetting('reminderInterval', parseInt(value))}
              >
                <SelectTrigger className="bg-background border-border rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">Every 15 minutes</SelectItem>
                  <SelectItem value="30">Every 30 minutes</SelectItem>
                  <SelectItem value="45">Every 45 minutes</SelectItem>
                  <SelectItem value="60">Every hour</SelectItem>
                  <SelectItem value="90">Every 90 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notification Style */}
            <div className="space-y-3">
              <label className="text-foreground font-medium">Notification Style</label>
              <Select 
                value={settings.notificationStyle} 
                onValueChange={(value) => updateSetting('notificationStyle', value)}
              >
                <SelectTrigger className="bg-background border-border rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gentle">Gentle & Calm 🌸</SelectItem>
                  <SelectItem value="energetic">Energetic & Fun 🎉</SelectItem>
                  <SelectItem value="minimal">Minimal & Simple ✨</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Sound Settings */}
        <div className="bg-card rounded-3xl p-6 shadow-card space-y-6">
          <div className="flex items-center space-x-3">
            <Volume2 className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-xl text-foreground">Sound</h2>
          </div>

          <div className="space-y-4">
            {/* Sound Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="text-foreground font-medium">Sound Effects</label>
                <p className="text-sm text-muted-foreground">Play sounds with notifications</p>
              </div>
              <Switch 
                checked={settings.soundEnabled}
                onCheckedChange={(checked) => updateSetting('soundEnabled', checked)}
              />
            </div>

            {/* Volume Slider */}
            {settings.soundEnabled && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-foreground font-medium">Volume</label>
                  <span className="text-sm text-muted-foreground">{settings.volume}%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <VolumeX className="w-4 h-4 text-muted-foreground" />
                  <Slider
                    value={[settings.volume]}
                    onValueChange={(value) => updateSetting('volume', value[0])}
                    max={100}
                    step={10}
                    className="flex-1"
                  />
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-card rounded-3xl p-6 shadow-card space-y-6">
          <div className="flex items-center space-x-3">
            <Palette className="w-5 h-5 text-accent" />
            <h2 className="font-display text-xl text-foreground">Appearance</h2>
          </div>

          <div className="space-y-4">
            {/* Theme Selection */}
            <div className="space-y-3">
              <label className="text-foreground font-medium">Theme</label>
              <Select 
                value={theme} 
                onValueChange={setTheme}
              >
                <SelectTrigger className="bg-background border-border rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto (System) 🌓</SelectItem>
                  <SelectItem value="light">Light Theme ☀️</SelectItem>
                  <SelectItem value="dark">Dark Theme 🌙</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-card rounded-3xl p-6 shadow-card space-y-4">
          <div className="flex items-center space-x-3">
            <Smartphone className="w-5 h-5 text-muted-foreground" />
            <h2 className="font-display text-xl text-foreground">About</h2>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Version</span>
              <span className="text-foreground">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Made with</span>
              <span className="text-foreground">💚 by Lovable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}