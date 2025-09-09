import { Character } from '@/types/character';
import stretchyBlobImg from '@/assets/stretchy-blob.png';
import sleepyCatImg from '@/assets/sleepy-cat.png';
import coffeeCupImg from '@/assets/coffee-cup.png';
import plantBuddyImg from '@/assets/plant-buddy.png';

export const characters: Character[] = [
  {
    id: 'stretchy-blob',
    name: 'Stretchy',
    description: 'A bouncy blob who loves to wiggle and stretch with you!',
    image: stretchyBlobImg,
    personality: 'playful',
    colors: {
      primary: 'hsl(142, 78%, 55%)',
      secondary: 'hsl(170, 78%, 55%)',
    },
  },
  {
    id: 'sleepy-cat',
    name: 'Whiskers',
    description: 'A cozy cat who knows the importance of good stretches.',
    image: sleepyCatImg,
    personality: 'calm',
    colors: {
      primary: 'hsl(25, 95%, 65%)',
      secondary: 'hsl(45, 95%, 65%)',
    },
  },
  {
    id: 'coffee-cup',
    name: 'Buzz',
    description: 'An energetic coffee cup ready to keep you moving!',
    image: coffeeCupImg,
    personality: 'energetic',
    colors: {
      primary: 'hsl(30, 85%, 45%)',
      secondary: 'hsl(25, 95%, 65%)',
    },
  },
  {
    id: 'plant-buddy',
    name: 'Sprout',
    description: 'A wise little plant that grows stronger with every stretch.',
    image: plantBuddyImg,
    personality: 'wise',
    colors: {
      primary: 'hsl(120, 60%, 45%)',
      secondary: 'hsl(142, 78%, 55%)',
    },
  },
];

export const motivationalMessages = {
  reminder: [
    "Time to stretch those muscles! 💪",
    "Your body is calling for a break! 🌟",
    "Stand up and feel amazing! ✨",
    "Let's move together! 🎉",
    "Your health journey continues! 🚀",
  ],
  success: [
    "Amazing work! You're on fire! 🔥",
    "Fantastic! Keep that streak going! ⭐",
    "You're a standing superstar! 🌟",
    "Perfect timing! Well done! 👏",
    "Your body thanks you! 💚",
  ],
  missed: [
    "No worries! Tomorrow is a fresh start! 🌅",
    "Every expert was once a beginner! 💫",
    "You've got this next time! 💪",
    "Small steps lead to big victories! 🎯",
    "Don't give up, you're amazing! ⭐",
  ],
};