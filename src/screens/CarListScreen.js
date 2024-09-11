import React from 'react';
import { View, Text } from 'react-native';
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

export default CarListScreen;
