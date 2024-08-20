import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => console.log('Item Clicked', item.title)}
                    >
                        <ImageBackground
                            style={styles.newimg}
                            source={{
                                uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=',
                            }}
                            borderRadius={25}
                        >
                            <Image style={styles.overlayImage} source={{ uri: item.image }} resizeMode='contain' />
                            <View style={styles.roundTextContainer}>
                                <Text style={styles.roundText}>-20%</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                {[...Array(5)].map((_, index) => (
                                    <MaterialIcon key={index} name="star" size={20} color={index < 4 ? '#FFD700' : '#E0E0E0'} style={styles.icon} />
                                ))}
                            </View>
                            <View style={styles.textContainer}>

                                <Text style={styles.productText}>{item.title}</Text>
                                <Text style={styles.brandText}>{item.category}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.loveIconContainer}

                                activeOpacity={0.8}
                            >
                                <Icon name="heart" size={20} color={'white'} style={styles.loveIcon} />
                            </TouchableOpacity>
                            <View style={styles.priceContainer}>
                                <Text></Text>
                                <Text style={styles.priceText}>${item.price}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
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
    itemContainer: {
        flex: 1,
        margin: 10,
    },
    newimg: {
        width: '100%',
        height: 330,
        borderRadius: 25,
        overflow: 'hidden',
    },
    overlayImage: {
        width: '100%',
        height: 200,
        position: 'absolute',
        borderRadius: 25,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 200,
    },
    icon: {
        marginHorizontal: 2,
    },
    textContainer: {
    top:5,
        bottom: 10,
        left: 10,
        // width: '70%',
    },
    brandText: {
        color: '#222222',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: -20
    },
    productText: {
        color: '#9B9B9B',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 30
    },
    loveIconContainer: {
        position: 'absolute',
        top: 160,
        right: 10,
        borderRadius: 30,
        backgroundColor: '#afb0b3',
        padding: 5,
    },
    loveIcon: {
        alignSelf: 'center',
    },
    loveIcon: {
        alignSelf: 'center',
    },
    priceContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    priceText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatListContent: {
        paddingBottom: 20,
    },
    roundTextContainer: {
        position: 'absolute',
        top: 15,
        left: 15,
        width: 70,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#DB3022',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
