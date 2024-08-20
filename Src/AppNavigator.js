// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native'
// import Splash from './Splash'
// import SignUp from './SignUp'
// import Login from './Login'
// import ForgotPassword from './ForgotPassword'

// const Stack = createStackNavigator();

// const AppNavigator = () => {

//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name='Splash' component={Splash} />
//                 <Stack.Screen name='SignUp' component={SignUp} />
//                 <Stack.Screen name='Login' component={Login} />
//                 <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default AppNavigator

// const styles = StyleSheet.create({})

import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import SignUp from './SignUp';
import Login from './Login';
import HomeScreen from './HomeScreen';
import ForgotPassword from './ForgotPassword';
import BottomTab from './BottomTab';
import Screen from './Screen';
import Home from './Home';
import Bag from './Bag';
import Favourites from './Favourites';
import Profile from './Profile';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
           <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='BottomTab' component={BottomTab}/>
                <Stack.Screen name='Screen' component={Screen}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Bag' component={Bag}/>
                <Stack.Screen name='Favourites' component={Favourites}/>
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator}/>
            </Stack.Navigator> 
           </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})