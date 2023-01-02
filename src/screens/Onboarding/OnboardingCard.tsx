import Colors from '@app/config/theme/Colors';
import {RFValue} from '@app/lib/ResponsiveFont';
import {hp, wp} from '@app/lib/ScreenDimensions';
import React from 'react';
import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import {ItemProps} from '../../../types';

type OnboardingCard = {
  item: ItemProps;
  index: number;
};

const OnboardingCard = ({item, index}: OnboardingCard) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>{index === 0 ? '' : 'Back'}</Text>
        <Text style={styles.headerTxt}>Skip</Text>
      </View>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    height: hp(5),
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: wp(4.5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: Colors.gray,
  },
  image: {
    height: hp(50),
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: RFValue(20),
    marginBottom: 10,
    color: Colors.black,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: Colors.black,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
