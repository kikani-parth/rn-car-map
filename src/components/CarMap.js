// CarMap.js

import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CarMap = () => {
  const initialRegion = {
    latitude: 37.78825, // Example: San Francisco
    longitude: -122.4324,
    latitudeDelta: 0.0922, // Controls the zoom level
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Car Location"
          description="This is where the car is located."
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Fills the entire View
  },
});

export default CarMap;
