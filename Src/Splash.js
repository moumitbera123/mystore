import { StyleSheet, Text, View } from 'react-native';
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
      <Text>Splash</Text>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
});



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Splash = () => {
//   return (
//     <View style={{flex:1,backgroundColor:'#000000'}}>
//       <Text>Splash</Text>
//     </View>
//   )
// }

// export default Splash

// const styles = StyleSheet.create({})