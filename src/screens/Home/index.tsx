import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {useDispatch, useSelector} from 'react-redux';
import {RFValue} from '@app/lib/ResponsiveFont';
import Colors from '@app/config/theme/Colors';
import AppTextInput from '@app/components/TextInput';
import AppButton from '@app/components/AppButton';
import {hp} from '@app/lib/ScreenDimensions';
import {logout} from '@app/features';
import {RootState} from '@app/store/store';

const Home = () => {
  const {user} = useSelector((state: RootState) => state.Auth);

  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(
    user.gender,
  );

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }
  const submit = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/user.jpg')}
      />
      <Text style={styles.title}>User Data</Text>
      <View style={styles.userInputsContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <AppTextInput
          placeholder="Enter your full name"
          setText={setName}
          value={name}
          editable={false}
          style={{alignSelf: 'center', marginBottom: hp(1)}}
        />

        <Text style={styles.inputTitle}>Age</Text>
        <AppTextInput
          placeholder="Enter your full name"
          setText={setAge}
          editable={false}
          value={age}
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
      <AppButton title="Clear" onPress={() => submit()} />
    </View>
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
export default Home;
