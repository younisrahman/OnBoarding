import React from 'react';
import {View, StyleSheet, TextInput, StyleProp, ViewStyle} from 'react-native';
import {hp, wp, RFValue} from '@app/lib';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '@app/config/theme/Colors';

interface Props {
  setText: (text: string) => void;
  placeholder: string;
  keyboardType?: 'numeric' | 'default';
  secureTextEntry?: boolean;
  value?: string;
  editable?: boolean;
  style?: StyleProp<ViewStyle>;
}

const AppTextInput = ({
  setText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  value,
  editable = true,
  style,
}: Props) => {
  return (
    <View
      style={[
        styles.searchSection,
        {
          backgroundColor: editable
            ? Colors.textInputBackground
            : Colors.light4,
        },
        style,
      ]}>
      <TextInput
        style={styles.input}
        editable={editable}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        onChangeText={text => setText(text)}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    width: wp(90),
    height: hp(7.5),
    borderRadius: hp(1),
    paddingHorizontal: hp(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    fontSize: RFValue(13),
    color: Colors.dark1,
  },
});

export default AppTextInput;
