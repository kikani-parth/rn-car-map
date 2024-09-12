import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SortControls = ({ sortBy, onSortByChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort by:</Text>
      <TouchableOpacity
        style={[styles.button, sortBy === 'name' && styles.selectedButton]}
        onPress={() => onSortByChange('name')}
      >
        <Text style={styles.buttonText}>Name</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, sortBy === 'fuel' && styles.selectedButton]}
        onPress={() => onSortByChange('fuel')}
      >
        <Text style={styles.buttonText}>Fuel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#B2BEB5',
  },
  selectedButton: {
    backgroundColor: '#FF5F1F',
    borderColor: '#FF5F1F',
  },
  buttonText: {},
});

export default SortControls;
