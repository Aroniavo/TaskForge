import { Redirect } from 'expo-router';

/**
 * App root index.
 * Redirects to the onboarding flow on first launch.
 * Replace with authentication check logic if needed.
 */
export default function Index() {
  return <Redirect href={{ pathname: '/onboarding' } as any} />; 
}
