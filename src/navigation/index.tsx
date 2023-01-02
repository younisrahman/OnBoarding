import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {RootState, useAppSelector} from '../store';
import {LoginScreen, HomeScreen, FeesScreen} from '@app/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootNavigator = () => {
  const {isAuthenticated} = useAppSelector((state: RootState) => state.Auth);

  if (!isAuthenticated) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Login',
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeesScreen" component={FeesScreen} />
      </Stack.Navigator>
    );
  }
};

export default Navigation;
