// FilteredCarList.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FilterControls from './FilterControls';
import CarList from './CarList';

const FilteredCarList = ({ cars }) => {
  return (
    <View>
      <FilterControls />
      <CarList cars={cars} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilteredCarList;
