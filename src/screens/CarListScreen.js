import React from 'react';
import { View, StyleSheet } from 'react-native';
import locationsData from '../../assets/locations.json';
import CarList from '../components/CarList';

const CarListScreen = () => {
  const cars = locationsData.placemarks;
  return (
    <View>
      <CarList cars={cars} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarListScreen;
