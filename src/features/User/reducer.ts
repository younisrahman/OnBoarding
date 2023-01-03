import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RadioButtonProps} from 'react-native-radio-buttons-group';

export interface IState {
  isOnBoarding: boolean;
  user: {
    name: string;
    age: string;
    gender: RadioButtonProps[];
  };
}

export const initState = {} as IState;

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    logout: () => initState,
    login: (state, action: PayloadAction<IState>) => {
      state.user = action.payload.user;
      state.isOnBoarding = action.payload.isOnBoarding;
    },
  },
});
export const {logout, login} = AuthSlice.actions;

export default AuthSlice;
