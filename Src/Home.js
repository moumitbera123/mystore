import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('BottomTab')}
            >
                <Icon name="menu-outline" size={28} color="#fff" />
            </TouchableOpacity>
            <HomeScreen />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    menuButton: {
        padding: 10,
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1000,
        backgroundColor: '#333', 
        borderRadius: 20,
    },
});
