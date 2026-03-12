import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ONBOARDING_SLIDES } from '../data/onboarding.data';

/**
 * Onboarding Screen 1 - "Plan Your Day"
 * Used as a standalone screen or embedded in navigator.
 */
export const OnboardingScreen1: React.FC = () => {
  const slide = ONBOARDING_SLIDES[0];
  const Illustration = slide.Illustration;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Illustration width={260} height={260} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {slide.title}
          <Text style={styles.titleHighlight}>{slide.titleHighlight}</Text>
        </Text>
        <Text style={styles.description}>{slide.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1E',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 320,
    borderRadius: 24,
  },
  textContainer: {
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  titleHighlight: {
    color: '#4A90FF',
  },
  description: {
    fontSize: 14,
    color: '#8899BB',
    textAlign: 'center',
    lineHeight: 22,
  },
});
