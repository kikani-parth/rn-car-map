// CarList.js

import React, { useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CarDetail from './CarDetail';

const CarList = ({ cars }) => {
  const renderItem = useCallback(({ item }) => {
    return <CarDetail car={item} />;
  }, []);
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cars}
        keyExtractor={(car) => car.vin}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarList;
