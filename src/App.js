import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { Permission, PERMISSION_TYPE } from './utils/AppPermission';
import RootNavigator from './navigation';
import SplashScreen from './screens/SplashScreen';
import { SET_PLAYBACK } from './redux/type';

const App = () => {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimePassed(true), 750);
    store.dispatch({ type: SET_PLAYBACK, payload: false });
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    console.disableYellowBox = true;
  });

  useEffect(() => {
    Permission.checkPermission(PERMISSION_TYPE.storage);
  }, []);

  function renderApp(isReady) {
    if (isReady && timePassed) {
      return <RootNavigator />;
    }
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{renderApp}</PersistGate>
    </Provider>
  );
};

export default App;
