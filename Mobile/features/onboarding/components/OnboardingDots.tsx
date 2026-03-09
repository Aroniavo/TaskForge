import React from 'react';
import { StyleSheet, View } from 'react-native';

interface OnboardingDotsProps {
  count: number;
  activeIndex: number;
}

export const OnboardingDots: React.FC<OnboardingDotsProps> = ({
  count,
  activeIndex,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
});
