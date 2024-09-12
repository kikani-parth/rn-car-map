// FilteredCarList.js

import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FilterControls from './FilterControls';
import CarList from './CarList';
import { filterCars } from '../utils/filterUtils';

const FilteredCarList = ({ cars }) => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
    engineType: '',
    fuel: '',
    exterior: '',
    interior: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredCars = filterCars(
    cars,
    filters.name,
    filters.address,
    filters.engineType,
    filters.fuel,
    filters.exterior,
    filters.interior
  );
  return (
    <View style={styles.container}>
      <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      <CarList cars={filteredCars} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilteredCarList;
