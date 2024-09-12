import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const CarMap = ({ cars }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setUserLocation(currentLocation.coords);
    };

    getLocation();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.errorMsgContainer}>
        <Text style={styles.errorMsg}>
          Permission to access location was denied
        </Text>
      </View>
    );
  }

  //   if (!userLocation) {
  //     // Show a loading indicator while the location is being fetched
  //     return (
  //       <View style={styles.loadingContainer}>
  //         <ActivityIndicator size="large" color="#0000ff" />
  //       </View>
  //     );
  //   }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: cars[0].coordinates[0],
          latitude: cars[0].coordinates[1], // Center the map around the first car initially
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={!!userLocation}
      >
        {cars.map((car) => (
          <Marker
            key={car.vin}
            coordinate={{
              longitude: car.coordinates[0],
              latitude: car.coordinates[1],
            }}
            title={car.name}
          />
        ))}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    color: 'red',
    fontSize: 18,
  },
});

export default CarMap;
