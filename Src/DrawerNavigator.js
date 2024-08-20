import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Bag from './Bag';
import Favourites from './Favourites';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome'
import BottomTab from './BottomTab';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Bag" component={Bag} />
            <Drawer.Screen name="Favourites" component={Favourites} />
            <Drawer.Screen name="Profile" component={Profile} />
       
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
