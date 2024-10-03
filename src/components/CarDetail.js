// CarDetail.js

import React, { memo } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const CarDetail = memo(({ car }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{car.name}</Text>
      <Text style={styles.text}>Address: {car.address}</Text>
      <Text style={styles.text}>Engine type: {car.engineType}</Text>
      <Text style={styles.text}>Fuel: {car.fuel}</Text>
      <Text style={styles.text}>Exterior: {car.exterior}</Text>
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
    borderRadius: 10,
    // width: 300,

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

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#0F52BA',
    // color: '#4682B4',
    // color: '#6082B6',
  },
  text: {
    marginBottom: 4, // Add spacing between each text element
  },
});

export default CarDetail;
