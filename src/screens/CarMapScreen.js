import React from 'react';
import { View, StyleSheet } from 'react-native';
import locationsData from '../../assets/locations.json';
import CarMap from '../components/CarMap';

const CarMapScreen = () => {
  const cars = locationsData.placemarks;

  return (
    <View style={styles.container}>
      <CarMap cars={cars} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CarMapScreen;
