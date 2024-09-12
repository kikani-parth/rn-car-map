import React from 'react';
import { Marker } from 'react-native-maps';

const CarMarker = React.memo(({ car, onPress, ...props }) => (
  <Marker
    key={car.vin}
    coordinate={{
      longitude: car.coordinates[0],
      latitude: car.coordinates[1],
    }}
    onPress={onPress}
    {...props}
  ></Marker>
));

export default CarMarker;
