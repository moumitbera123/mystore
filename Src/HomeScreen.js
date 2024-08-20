import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.log(error, 'Error Fetching data');
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.overlayImage} source={{ uri: item.image }} resizeMode='contain' />
                            <View style={styles.iconContainer}>
                                <MaterialIcon name="star" size={20} color="#FFD700" style={styles.icon} />
                                <View style={styles.loveIconContainer}>
                                    <MaterialIcon name="heart" size={20} color="#fff" />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.category}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        position: 'relative',
    },
    imageContainer: {
        position: 'relative',
    },
    overlayImage: {
        width: 100,
        height: 100,
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        flexDirection: 'row',
        padding: 10,
    },
    icon: {
        marginRight: 10,
    },
    loveIconContainer: {
        backgroundColor: '#f00',
        borderRadius: 20,
        padding: 5,
    }
});
