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
        keyboardType="numeric"
        returnKeyType="done"
        style={styles.fuelFilterInput}
        placeholder="Filter by fuel"
        value={filters.fuel}
        onChangeText={(text) => onFilterChange('fuel', text)}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.exteriorFilterInput}
        placeholder="Filter by exterior"
        value={filters.exterior}
        onChangeText={(text) => onFilterChange('exterior', text)}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.interiorFilterInput}
        placeholder="Filter by interior"
        value={filters.interior}
        onChangeText={(text) => onFilterChange('interior', text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nameFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '48%',
  },
  addressFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '48%',
  },
  engineTypeFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '48%',
  },
  fuelFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '48%',
  },
  exteriorFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '48%',
  },
  interiorFilterInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '48%',
  },
});

export default FilterControls;
