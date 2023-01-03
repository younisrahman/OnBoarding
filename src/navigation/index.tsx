import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {RootState, useAppSelector} from '../store';
import {Home, Onboarding, Profile} from '@app/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootNavigator = () => {
  const {isOnBoarding} = useAppSelector((state: RootState) => state.Auth);

  if (!isOnBoarding) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Onboarding',
            headerShown: false,
          }}
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          options={{
            title: 'Profile',
            headerShown: false,
          }}
          name="Profile"
          component={Profile}
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
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
};

export default Navigation;
