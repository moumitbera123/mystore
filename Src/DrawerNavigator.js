// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './Home';
// import Bag from './Bag';
// import Favourites from './Favourites';
// import Profile from './Profile';
// import Icon from 'react-native-vector-icons/FontAwesome'
// import BottomTab from './BottomTab';
// import Screen from './Screen';
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator >
//             {/* <Drawer.Screen name='Screen' component={Screen}/>
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Bag" component={Bag} />
//             <Drawer.Screen name="Favourites" component={Favourites} />
//             <Drawer.Screen name="Profile" component={Profile} /> */}
         
//             <Drawer.Screen name='BottomTab' component={BottomTab} />
            
//         </Drawer.Navigator>
//     );
// };

// export default DrawerNavigator;
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTab from './BottomTab';
import Bag from './Bag';
import Favourites from './Favourites';
import Profile from './Profile';
import Home from './Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu-outline" size={25} style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ),
        headerTitle: '', 
      })}
    >
      <Drawer.Screen name="Main" component={BottomTab} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name='Bag' component={Bag}/>
      <Drawer.Screen name='Favourites' component={Favourites}/>
      <Drawer.Screen name='Profile' component={Profile}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

   

