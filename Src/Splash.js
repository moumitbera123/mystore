import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={{uri:'https://media.istockphoto.com/id/1371819219/photo/full-length-portrait-of-a-happy-young-female-sitting-inside-a-shopping-cart-and-holding.webp?b=1&s=612x612&w=0&k=20&c=4Hwo9CEseV-5Xjnn_3x6zA8kqpB__Ai5jnXUlDWF31E='}} // Update with the correct path to your logo image
        style={styles.logo}
      />
      <Text style={styles.text}>myStore</Text>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },
});