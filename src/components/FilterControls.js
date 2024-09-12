import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FilterControls = ({ filters, onFilterChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleToggleVisibility}
        style={styles.iconContainer}
      >
        <FontAwesome name="filter" size={24} color="black" />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.filtersContainer}>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  iconContainer: {
    // alignItems: 'center',
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
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
