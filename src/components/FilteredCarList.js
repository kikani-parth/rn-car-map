// FilteredCarList.js

import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FilterControls from './FilterControls';
import CarList from './CarList';
import { filterCars } from '../utils/filterUtils';

const FilteredCarList = ({ cars }) => {
  const [filter, setFilter] = useState('');

  // Filter cars based on name
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FilterControls filter={filter} setFilter={setFilter} />
      <CarList cars={filteredCars} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilteredCarList;
