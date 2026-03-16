import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withSequence, 
  withTiming,
  Easing
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// Branded Image from assets/illustrator
const BrandedIllustrator = require('../../../assets/illustrator/illustrator.png');

interface OnboardingSlideItemProps {
  onGetStarted: () => void;
}

export const OnboardingSlideItem: React.FC<OnboardingSlideItemProps> = ({
  onGetStarted,
}) => {
  const floatingValue = useSharedValue(0);
  const pulseValue = useSharedValue(1);

  useEffect(() => {
    // Floating animation for the card
    floatingValue.value = withRepeat(
      withSequence(
        withTiming(-12, { duration: 3000, easing: Easing.inOut(Easing.sin) }),
        withTiming(12, { duration: 3000, easing: Easing.inOut(Easing.sin) })
      ),
      -1,
      true
    );

    // Subtle pulse for a premium feel
    pulseValue.value = withRepeat(
      withTiming(1.04, { duration: 4000, easing: Easing.inOut(Easing.sin) }),
      -1,
      true
    );
  }, []);

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: floatingValue.value },
        { scale: pulseValue.value }
      ],
    };
  });

  return (
    <View style={styles.slide}>
      {/* Background Gradient for overall depth */}
      <LinearGradient
        colors={['#0F0D21', '#1A1A32', '#0D0D21']}
        style={StyleSheet.absoluteFill}
      />

      {/* Top Section - Branded Illustration Card */}
      <View style={styles.topSection}>
        <Animated.View style={[styles.cardContainer, animatedCardStyle]}>
          <LinearGradient
            colors={['rgba(139, 92, 246, 0.12)', 'rgba(76, 29, 149, 0.05)']}
            style={styles.cardGradient}
          >
            <BlurView intensity={25} tint="dark" style={styles.blurBackground} />
            <View style={styles.illustrationWrapper}>
              <Image 
                source={BrandedIllustrator} 
                style={styles.brandedImage} 
                resizeMode="contain" 
              />
            </View>
          </LinearGradient>
        </Animated.View>
      </View>

      {/* Middle Section - Branded Text */}
      <View style={styles.middleSection}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>
            Master Your {'\n'}
            <Text style={styles.titleHighlight}>Task Forge</Text>
          </Text>
          <Text style={styles.description}>
            Forge your productivity with AI-driven insights and a gamified experience designed to level up your life.
          </Text>
        </View>
      </View>

      {/* Bottom Section - Branded Button */}
      <View style={styles.bottomSection}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
            onPress={onGetStarted} 
            activeOpacity={0.8}
            style={styles.buttonTouch}
          >
            <LinearGradient
              colors={['#8B5CF6', '#6D28D9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Get Started 🚀</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    flex: 1,
  },
  topSection: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  cardContainer: {
    width: width * 0.88,
    aspectRatio: 1,
    borderRadius: 48,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: 'rgba(167, 139, 250, 0.2)', // Light violet border
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.15,
    shadowRadius: 45,
    elevation: 15,
  },
  cardGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  illustrationWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  brandedImage: {
    width: '110%',
    height: '110%',
  },
  middleSection: {
    flex: 3,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 42,
    marginBottom: 16,
  },
  titleHighlight: {
    color: '#A78BFA', // Vibrant Lavender/Violet
  },
  description: {
    fontSize: 16,
    color: '#C4B5FD', // Soft Lavender
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 8,
  },
  bottomSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    width: '100%',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 24,
  },
  buttonTouch: {
    width: '100%',
    height: 64,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 12,
  },
  buttonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});
