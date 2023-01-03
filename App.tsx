import * as React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Navigation from '@app/navigation';
import {SafeAreaView, StatusBar} from 'react-native';
import {store, persistor} from '@app/store';
import AppButton from '@app/components/AppButton';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar animated={true} />
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
