import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IState {
  isOnBoarding: boolean;
  user: {
    name: string;
    age: string;
    gender: string;
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
      state.isOnBoarding = true;
    },
  },
});
export const {logout, login} = AuthSlice.actions;

export default AuthSlice;
