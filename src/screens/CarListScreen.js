import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import locationsData from '../../assets/locations.json';
import FilteredCarList from '../components/FilteredCarList';

const CarListScreen = () => {
  const cars = locationsData.placemarks;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FilteredCarList cars={cars} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CarListScreen;
