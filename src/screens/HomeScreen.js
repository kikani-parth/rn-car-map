// HomeScreen.js

import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import locationsData from '../../assets/locations.json';
import CarMap from '../components/CarMap';
import FilteredCarList from '../components/FilteredCarList';

const HomeScreen = () => {
  const cars = locationsData.placemarks;

  return (
    <View style={styles.container}>
      <View style={styles.mapSection}>
        <CarMap cars={cars} />
      </View>
      <KeyboardAvoidingView
        style={styles.listSection}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <FilteredCarList cars={cars} />
        </ScrollView>
      </KeyboardAvoidingView>
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

export default HomeScreen;
