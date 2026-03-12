import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ONBOARDING_SLIDES } from '../data/onboarding.data';

interface OnboardingScreen4Props {
  onGetStarted?: () => void;
}

/**
 * Onboarding Screen 4 - "Level Up Your Life"
 * Last screen with "Get Started" CTA button.
 */
export const OnboardingScreen4: React.FC<OnboardingScreen4Props> = ({
  onGetStarted,
}) => {
  const slide = ONBOARDING_SLIDES[3];
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
        {onGetStarted && (
          <TouchableOpacity
            style={styles.button}
            onPress={onGetStarted}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>Get Started 🚀</Text>
          </TouchableOpacity>
        )}
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
    paddingBottom: 48,
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
    width: '100%',
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
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4A90FF',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 32,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#4A90FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
