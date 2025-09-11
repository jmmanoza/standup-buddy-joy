import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2f2d305d72eb4e2d81f0f3877995c61b',
  appName: 'standup-buddy-joy',
  webDir: 'dist',
  server: {
    url: 'https://2f2d305d-72eb-4e2d-81f0-f3877995c61b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;