// In App.js in a new project

import * as React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, Text} from 'react-native';
// import {store, persistor} from '@app/store';
// import {Colors} from './src/config';

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <SafeAreaView style={{flex: 1}}>
    //       <StatusBar animated={true} backgroundColor={Colors.primaryLighter} />
    <Text>HEllo</Text>
    //     {/* </SafeAreaView>
    //   </PersistGate>
    // </Provider> */}
  );
}

export default App;
