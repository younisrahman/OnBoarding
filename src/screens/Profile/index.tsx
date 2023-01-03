import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {useDispatch} from 'react-redux';
import {RFValue} from '@app/lib/ResponsiveFont';
import Colors from '@app/config/theme/Colors';
import AppTextInput from '@app/components/TextInput';
import AppButton from '@app/components/AppButton';
import {hp} from '@app/lib/ScreenDimensions';
import {login} from '@app/features';

const Profile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Female',
      value: 'Female',
      color: Colors.primaryMain,
      labelStyle: {
        fontSize: RFValue(12),
        fontWeight: '500',
      },
    },
    {
      id: '2',
      label: 'Male',
      value: 'Male',
      color: Colors.primaryMain,
      labelStyle: {
        fontSize: RFValue(12),
        fontWeight: '500',
      },
    },
  ]);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }
  const submit = () => {
    const data = {
      isOnBoarding: true,
      user: {
        name,
        age,
        gender: radioButtons,
      },
    };
    dispatch(login(data));
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/user.jpg')}
      />
      <Text style={styles.title}>Complete your profile</Text>
      <View style={styles.userInputsContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <AppTextInput
          placeholder="Enter your full name"
          setText={setName}
          style={{alignSelf: 'center', marginBottom: hp(1)}}
        />

        <Text style={styles.inputTitle}>Age</Text>
        <AppTextInput
          placeholder="Enter your full name"
          setText={setAge}
          keyboardType="numeric"
          style={{alignSelf: 'center', marginBottom: hp(1)}}
        />

        <Text style={[styles.inputTitle, {marginBottom: hp(1)}]}>Gender</Text>
        <RadioGroup
          layout={'row'}
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
        />
      </View>
      <AppButton title="Next" onPress={() => submit()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light4,
    paddingTop: hp(8),
  },
  title: {
    fontWeight: '800',
    fontSize: RFValue(20),
    marginBottom: 10,
    color: Colors.black,
    textAlign: 'center',
    marginTop: hp(3),
  },
  image: {
    alignSelf: 'center',
  },
  inputTitle: {
    fontSize: RFValue(12),
    fontWeight: '500',
    marginVertical: hp(2),
  },
  userInputsContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(4),
  },
});
export default Profile;
