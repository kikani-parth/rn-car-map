// FilteredCarList.js

import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FilterControls from './FilterControls';
import SortControls from './SortControls';
import CarList from './CarList';
import { filterCars } from '../utils/filterUtils';
import { sortCars } from '../utils/sortUtils';

const FilteredCarList = ({ cars }) => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
    engineType: '',
    fuel: '',
    exterior: '',
    interior: '',
  });

  const [sortBy, setSortBy] = useState('name');

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

  const sortedCars = sortCars(filteredCars, 'asc', sortBy);

  return (
    <View style={styles.container}>
      <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      <SortControls sortBy={sortBy} onSortByChange={setSortBy} />
      <CarList cars={sortedCars} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilteredCarList;
