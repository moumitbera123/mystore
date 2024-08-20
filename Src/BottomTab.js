import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Bag from './Bag';
import Favourites from './Favourites';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Bottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Bag':
              iconName = 'bag-outline';
              break;
            case 'Favourites':
              iconName = 'heart-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'home-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName='Home'
    >
      <Bottom.Screen name='Home' component={Home} />
      <Bottom.Screen name='Bag' component={Bag} />
      <Bottom.Screen name='Favourites' component={Favourites} />
      <Bottom.Screen name='Profile' component={Profile} />
    </Bottom.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
