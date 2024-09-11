// CarDetail.js

import React, { memo } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const CarDetail = memo(({ car }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{car.name}</Text>
      <Text>Address: {car.address}</Text>
      <Text>Engine type: {car.engineType}</Text>
      <Text>Fuel: {car.fuel}</Text>
      <Text>Exterior: {car.exterior}</Text>
      <Text>Interior: {car.interior}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    // Elevation for Android
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
});

export default CarDetail;
