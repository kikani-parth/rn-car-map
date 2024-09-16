import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import CarMarker from './CarMarker';

const CarMap = ({ cars }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const initialRegion = React.useMemo(
    () => ({
      longitude: cars[0].coordinates[0],
      latitude: cars[0].coordinates[1],
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }),
    [cars]
  );

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

  const handleMarkerPress = (vin) => {
    if (selectedMarker === vin) {
      // Deselect marker if the same one is tapped
      setSelectedMarker(null);
    } else {
      // Select a new marker
      setSelectedMarker(vin);
    }
  };

  if (errorMsg) {
    return (
      <View style={styles.errorMsgContainer}>
        <Text style={styles.errorMsg}>
          Permission to access location was denied
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={!!userLocation}
      >
        {cars.map((car) => {
          const isSelected = selectedMarker === car.vin;

          // Show all cars if no car is selected, or show only the selected car
          if (selectedMarker === null || selectedMarker === car.vin) {
            // console.log(selectedMarker);
            // console.log(isSelected);

            return (
              <CarMarker
                key={car.vin}
                car={car}
                onPress={() => handleMarkerPress(car.vin)}
              >
                {/* {isSelected && ( */}
                <Callout>
                  <View>
                    <Text style={styles.calloutText}>{car.name}</Text>
                  </View>
                </Callout>
                {/* )} */}
              </CarMarker>
            );
          }
          return null;
        })}
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
