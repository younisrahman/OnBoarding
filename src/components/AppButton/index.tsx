import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '@app/config/theme/Colors';
import {hp} from '@app/lib/ScreenDimensions';
import {RFValue} from '@app/lib/ResponsiveFont';

type AppButtonProps = {
  style?: StyleProp<ViewStyle>;
  title?: string;
  onPress?: () => void;
};

const AppButton = ({style, title, onPress}: AppButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryMain,
    width: '90%',
    height: hp(7.5),
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: RFValue(14.5),
    fontWeight: '500',
    color: Colors.light4,
  },
});
export default AppButton;
