// import { StyleSheet, View, TouchableOpacity } from 'react-native';
// import React from 'react';
// import HomeScreen from './HomeScreen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//                 style={styles.menuButton}
//                 onPress={() => navigation.toggleDrawer()}
//             >
//                 <Icon name="menu-outline" size={28} color="#fff" />
//             </TouchableOpacity>
//             {/* <HomeScreen /> */}
//         </View>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
        
//     },

// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'

const Home = () => {
  return (
    <View style={{flex:1}}>
   <HomeScreen/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})