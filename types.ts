import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Profile: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type OnboardingProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export type ItemProps = {
  description: string;
  id: string;
  image: number;
  title: string;
};
