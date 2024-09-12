// FilterControls.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FilterControls = ({ filters, onFilterChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.nameFilterInput}
        placeholder="Filter by name"
        value={filters.name}
        onChangeText={(text) => onFilterChange('name', text)}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.addressFilterInput}
        placeholder="Filter by address"
        value={filters.address}
        onChangeText={(text) => onFilterChange('address', text)}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.engineTypeFilterInput}
        placeholder="Filter by engine type"
        value={filters.engineType}
        onChangeText={(text) => onFilterChange('engineType', text)}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.fuelFilterInput}
        placeholder="Filter by fuel"
        value={filters.fuel}
        onChangeText={(text) => onFilterChange('fuel', text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  nameFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  addressFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  engineTypeFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fuelFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default FilterControls;
