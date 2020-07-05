import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Permission, PERMISSION_TYPE } from './utils/AppPermission';

const App = () => {
  useEffect(() => {
    Permission.checkPermission(PERMISSION_TYPE.storage);
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
