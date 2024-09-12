// FilteredCarList.js

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FilterControls from './FilterControls';
import SortControls from './SortControls';
import CarList from './CarList';
import { filterCars } from '../utils/filterUtils';
import { sortCars } from '../utils/sortUtils';
import { FontAwesome } from '@expo/vector-icons';

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
  const [isVisible, setIsVisible] = useState(false);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
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
      {/* Filter Icon */}
      <TouchableOpacity
        onPress={handleToggleVisibility}
        style={styles.iconContainer}
      >
        <FontAwesome name="filter" size={24} color="#FF5F1F" />
      </TouchableOpacity>

      {/* Conditionally show FilterControls and SortControls */}
      {isVisible && (
        <View>
          <FilterControls
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <SortControls sortBy={sortBy} onSortByChange={setSortBy} />
        </View>
      )}
      <CarList cars={sortedCars} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default FilteredCarList;
