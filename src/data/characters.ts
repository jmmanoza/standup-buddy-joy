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
    evolutions: [
      { level: 5, name: 'Super Stretchy', description: 'Now with extra bounce!', unlockMessage: 'Your blob learned to bounce higher! 🎉' },
      { level: 10, name: 'Mega Stretchy', description: 'Master of all stretches!', unlockMessage: 'Your blob became a stretch master! 🏆' },
      { level: 20, name: 'Ultra Stretchy', description: 'The ultimate stretching companion!', unlockMessage: 'Your blob reached ultimate form! ⭐' },
    ],
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
    evolutions: [
      { level: 5, name: 'Alert Whiskers', description: 'More energetic and ready to move!', unlockMessage: 'Whiskers became more alert! 😺' },
      { level: 10, name: 'Zen Master Whiskers', description: 'Perfectly balanced in rest and movement.', unlockMessage: 'Whiskers achieved zen mastery! 🧘‍♀️' },
      { level: 20, name: 'Legendary Whiskers', description: 'The wise old cat of perfect posture.', unlockMessage: 'Whiskers became a legend! 👑' },
    ],
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
    evolutions: [
      { level: 5, name: 'Espresso Buzz', description: 'Double the energy, double the fun!', unlockMessage: 'Buzz got an energy upgrade! ⚡' },
      { level: 10, name: 'Turbo Buzz', description: 'Maximum caffeine, maximum motivation!', unlockMessage: 'Buzz went into turbo mode! 🚀' },
      { level: 20, name: 'Cosmic Buzz', description: 'Energy levels beyond imagination!', unlockMessage: 'Buzz reached cosmic power! ✨' },
    ],
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
    evolutions: [
      { level: 5, name: 'Growing Sprout', description: 'Taller and more vibrant than ever!', unlockMessage: 'Sprout grew bigger! 🌱' },
      { level: 10, name: 'Blooming Sprout', description: 'Beautiful flowers showing your progress!', unlockMessage: 'Sprout started blooming! 🌸' },
      { level: 20, name: 'Mighty Oak', description: 'A strong tree representing your dedication!', unlockMessage: 'Sprout became a mighty oak! 🌳' },
    ],
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