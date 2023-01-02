export type RootStackParamList = {
  LoginScreen: undefined;
  Home: undefined;
  Profile: {userId: string};
  FeesScreen: undefined;
  Feed: {sort: 'latest' | 'top'} | undefined;
};
