import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BottomTab from './BottomTab';

const Home = ({navigation}) => {
    // const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.openDrawer()} // Ensure this is within DrawerNavigator
            >
                <Icon name="menu-outline" size={28} color="#333" />
            </TouchableOpacity>
            <HomeScreen />
     
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    menuButton: {
        padding: 10,
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1000,
    },
});
