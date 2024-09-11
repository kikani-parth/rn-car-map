// FilterControls.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FilterControls = ({ filter, setFilter }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Filter by name"
        value={filter} // Controlled input
        onChangeText={setFilter} // Update the filter state
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
});

export default FilterControls;
