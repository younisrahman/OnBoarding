import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingCard from './OnboardingCard';
import {Paginator, ButtonWithAnimation} from '@app/components';
import data from './data';
import Colors from '@app/config/theme/Colors';
import AppButton from '@app/components/AppButton';
import {hp} from '@app/lib/ScreenDimensions';
import {OnboardingProps} from 'types';

const Onboarding = ({navigation}: OnboardingProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dataRef = useRef<any>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = async () => {
    if (currentIndex < data.length - 1) {
      dataRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <OnboardingCard item={item} index={index} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={dataRef}
        />
      </View>

      <Paginator data={data} scrollX={scrollX} />
      {currentIndex < 2 ? (
        <ButtonWithAnimation
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / data.length)}
        />
      ) : (
        <AppButton
          title="Start"
          style={{marginVertical: hp(8.5)}}
          onPress={scrollTo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light4,
  },
});

export default Onboarding;
