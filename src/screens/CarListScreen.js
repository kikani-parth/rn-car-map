import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import locationsData from '../../assets/locations.json';
import FilteredCarList from '../components/FilteredCarList';

const CarListScreen = () => {
  const cars = locationsData.placemarks;

  return (
    <SafeAreaView style={styles.container}>
      <FilteredCarList cars={cars} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
});

export default CarListScreen;
