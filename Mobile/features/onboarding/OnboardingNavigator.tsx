import { useRouter } from 'expo-router';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { OnboardingSlideItem } from './components/OnboardingSlideItem';

/**
 * OnboardingNavigator
 * Simplified to a single animated landing screen.
 */
export const OnboardingNavigator: React.FC = () => {
  const router = useRouter();

  const handleFinish = () => {
    // Navigate to login after onboarding
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />

      <OnboardingSlideItem
        onGetStarted={handleFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1E',
  },
});
