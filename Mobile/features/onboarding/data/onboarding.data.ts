import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';
import OnboardingIcon1 from '../../../assets/Icon/Oboarding1.svg';
import OnboardingIcon2 from '../../../assets/Icon/Onboarding2.svg';
import OnboardingIcon3 from '../../../assets/Icon/Onboarding3.svg';
import OnboardingIcon4 from '../../../assets/Icon/Onboarding4.svg';

export interface OnboardingSlide {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
  Illustration: ComponentType<SvgProps>;
}

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'screen1',
    title: 'Plan Your ',
    titleHighlight: 'Day',
    description:
      'Set your 3 main priorities and organize your coding or study sessions with ease.',
    Illustration: OnboardingIcon1,
  },
  {
    id: 'screen2',
    title: 'AI-Powered\n',
    titleHighlight: 'Motivation',
    description:
      'Receive daily smart quotes and personalized reminders tailored to your well-being and health goals.',
    Illustration: OnboardingIcon2,
  },
  {
    id: 'screen3',
    title: 'Gamify Your\n',
    titleHighlight: 'Daily Goals',
    description:
      'Track your steps, complete tasks, and earn XP as you build a healthier routine. Productivity made fun.',
    Illustration: OnboardingIcon3,
  },
  {
    id: 'screen4',
    title: 'Level Up\n',
    titleHighlight: 'Your Life',
    description:
      'Earn badges, maintain streaks, and climb the ranks from Beginner to Productivity Master.',
    Illustration: OnboardingIcon4,
  },
];
