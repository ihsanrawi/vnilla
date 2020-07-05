import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { Permission, PERMISSION_TYPE } from './utils/AppPermission';

const App = () => {
  useEffect(() => {
    Permission.checkPermission(PERMISSION_TYPE.storage);
  }, []);

  function renderApp() {
    return (
      <View>
        <Text>App</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{renderApp}</PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
