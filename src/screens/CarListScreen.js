// CarListScreen.js

import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import locationsData from '../../assets/locations.json';
import CarList from '../components/CarList';
import CarMap from '../components/CarMap';

const CarListScreen = () => {
  const cars = locationsData.placemarks;

  return (
    <View style={styles.container}>
      <View style={styles.mapSection}>
        <CarMap />
      </View>
      <View style={styles.listSection}>
        <ScrollView>
          <CarList cars={cars} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapSection: {
    flex: 2,
  },
  listSection: {
    flex: 1,
  },
});

export default CarListScreen;
