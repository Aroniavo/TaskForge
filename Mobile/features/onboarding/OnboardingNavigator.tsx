import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { OnboardingSlideItem } from './components/OnboardingSlideItem';
import { ONBOARDING_SLIDES } from './data/onboarding.data';
import { useOnboarding } from './hooks/useOnboarding';

const { width } = Dimensions.get('window');

/**
 * OnboardingNavigator
 * Main entry point for the onboarding flow.
 * Manages horizontal swipe between 4 slides.
 */
export const OnboardingNavigator: React.FC = () => {
  const router = useRouter();
  const { currentIndex, flatListRef, handleScroll, isLastSlide } = useOnboarding();

  const handleGetStarted = () => {
    // Navigate to main app after onboarding
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />

      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={width}
        snapToAlignment="center"
        bounces={false}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <OnboardingSlideItem
            item={item}
            isLast={item.id === ONBOARDING_SLIDES[ONBOARDING_SLIDES.length - 1].id}
            onGetStarted={handleGetStarted}
            currentIndex={currentIndex}
            totalSlides={ONBOARDING_SLIDES.length}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1E',
    width,
  },
});
