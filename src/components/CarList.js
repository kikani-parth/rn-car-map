import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import CarDetail from './CarDetail';

const CarList = ({ cars }) => {
  return (
    <View>
      <FlatList
        data={cars}
        keyExtractor={(car) => car.vin}
        renderItem={({ item }) => {
          return <CarDetail car={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarList;
