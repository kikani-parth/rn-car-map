import React from 'react';
import { View, Text } from 'react-native';

const CarDetail = ({ car }) => {
  return (
    <View>
      <Text>{car.name}</Text>
      <Text>Address: {car.address}</Text>
      <Text>Engine type: {car.engineType}</Text>
      <Text>Fuel: {car.fuel}</Text>
      <Text>Exterior: {car.exterior}</Text>
      <Text>Interior: {car.interior}</Text>
    </View>
  );
};

export default CarDetail;
