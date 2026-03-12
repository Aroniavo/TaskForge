import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingSlide } from '../data/onboarding.data';

const { width } = Dimensions.get('window');

interface OnboardingSlideItemProps {
  item: OnboardingSlide;
  isLast: boolean;
  onGetStarted: () => void;
  currentIndex: number;
  totalSlides: number;
}

export const OnboardingSlideItem: React.FC<OnboardingSlideItemProps> = ({
  item,
  isLast,
  onGetStarted,
  currentIndex,
  totalSlides,
}) => {
  const Illustration = item.Illustration;

  return (
    <View style={styles.slide}>
      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Illustration width={260} height={260} />
      </View>

      {/* Bottom content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title}
          <Text style={styles.titleHighlight}>{item.titleHighlight}</Text>
        </Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* Dot indicators */}
        <View style={styles.dotsRow}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        {/* CTA on last slide */}
        {isLast && (
          <TouchableOpacity style={styles.button} onPress={onGetStarted} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Get Started 🚀</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    flex: 1,
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
  textContainer: {
    width: '100%',
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 36,
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
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  dot: {
    borderRadius: 4,
    height: 8,
  },
  activeDot: {
    width: 28,
    backgroundColor: '#4A90FF',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: '#2A3A5A',
  },
  button: {
    marginTop: 16,
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
