// FilteredCarList.js

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
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
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Car Mall</Text>
        {/* Filter Icon */}
        <TouchableOpacity
          onPress={handleToggleVisibility}
          style={styles.iconContainer}
        >
          <FontAwesome name="filter" size={24} color="#4682B4" />
        </TouchableOpacity>
      </View>

      {/* Conditionally show FilterControls and SortControls */}
      {isVisible && (
        <>
          <FilterControls
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <View style={styles.sortControls}>
            <SortControls sortBy={sortBy} onSortByChange={setSortBy} />
          </View>
        </>
      )}
      <CarList cars={sortedCars} />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    margin: 10,
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0F52BA',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    marginHorizontal: 10,
  },
  sortControls: {
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.13,
    shadowRadius: 5,

    // Elevation for Android
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
  },
});

export default FilteredCarList;
