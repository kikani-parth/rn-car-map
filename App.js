import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarListScreen from './src/screens/CarListScreen';
import CarMapScreen from './src/screens/CarMapScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Car List" component={CarListScreen} />
        <Tab.Screen name="Car Map" component={CarMapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
