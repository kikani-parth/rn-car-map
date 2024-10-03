import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import CarMapScreen from './src/screens/CarMapScreen';
import CarListScreen from './src/screens/CarListScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const MapIcon = () => {
    return <FontAwesome5 name="map-marked-alt" size={24} color="black" />;
  };

  const ListIcon = () => {
    return (
      <MaterialIcons name="format-list-bulleted" size={24} color="black" />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Car List"
          component={CarListScreen}
          options={{
            tabBarLabel: 'Car List',
            tabBarIcon: () => <ListIcon />,
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Car Map"
          component={CarMapScreen}
          options={{
            tabBarLabel: 'Car Map',
            tabBarIcon: () => <MapIcon />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
