import React from 'react';
import { View, StyleSheet } from 'react-native';
import CarListScreen from './src/screens/CarListScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <CarListScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
