import {combineReducers} from 'redux';

import {AuthSlice} from '../features';

const rootReducer = combineReducers({
  Auth: AuthSlice.reducer,
});

export default rootReducer;
