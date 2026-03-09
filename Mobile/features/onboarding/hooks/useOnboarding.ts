import { useRef, useState } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ONBOARDING_SLIDES } from '../data/onboarding.data';

export const useOnboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideSize);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const isLastSlide = currentIndex === ONBOARDING_SLIDES.length - 1;

  return {
    currentIndex,
    flatListRef,
    handleScroll,
    goToNext,
    isLastSlide,
    slides: ONBOARDING_SLIDES,
  };
};
