import React from 'react';
import HomeScreen from './src/screens/Home';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaView style={style.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
