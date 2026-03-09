import { ImageSourcePropType } from 'react-native';

export interface OnboardingSlide {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: ImageSourcePropType;
}

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'screen1',
    title: 'Plan Your ',
    titleHighlight: 'Day',
    description:
      'Set your 3 main priorities and organize your coding or study sessions with ease.',
    image: require('../../../assets/images/onboarding1.png'),
  },
  {
    id: 'screen2',
    title: 'AI-Powered\n',
    titleHighlight: 'Motivation',
    description:
      'Receive daily smart quotes and personalized reminders tailored to your well-being and health goals.',
    image: require('../../../assets/images/onboarding2.png'),
  },
  {
    id: 'screen3',
    title: 'Gamify Your\n',
    titleHighlight: 'Daily Goals',
    description:
      'Track your steps, complete tasks, and earn XP as you build a healthier routine. Productivity made fun.',
    image: require('../../../assets/images/onboarding3.png'),
  },
  {
    id: 'screen4',
    title: 'Level Up\n',
    titleHighlight: 'Your Life',
    description:
      'Earn badges, maintain streaks, and climb the ranks from Beginner to Productivity Master.',
    image: require('../../../assets/images/onboarding4.png'),
  },
];
