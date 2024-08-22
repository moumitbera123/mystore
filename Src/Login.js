

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
  const navigation = useNavigation();
  const navigatetosignup = () =>{
    navigation.navigate('SignUp')
  }
  const navigatetoHomeScreen =()=>{
    navigation.navigate('DrawerNavigator')
  }
  const navigatetoforgotpassword = () =>{
    navigation.navigate('ForgotPassword')
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Log into</Text>
        <Text style={styles.subtitle}>Your account</Text>
      </View>

      <View style={styles.formContainer}>

        <TextInput style={styles.input} placeholder="Email adress" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <View style={{marginLeft:210}}>
        <TouchableOpacity onPress={navigatetoforgotpassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
  
        <TouchableOpacity style={styles.button} onPress={navigatetoHomeScreen}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Or sign up with</Text>
        <View style={styles.iconsContainer}>
          <Icon name="apple" size={30} color="#000" />
          <Icon name="google" size={30} color="#000" />
          <Icon name="facebook" size={30} color="#000" />
        </View>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={navigatetosignup}>
          <Text style={styles.loginLink}>sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop:20
  },
  input: {
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    borderTopWidth: 0, 
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    borderRadius: 0,
  },
  button: {
    backgroundColor: '#454242',
    // padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: "center",
    height: 53,
    width: 180,
    marginLeft: 80,
    marginTop:60
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    // marginBottom: 10,
    marginRight:210,
    marginTop:40,

  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginRight:150,
    marginTop:20
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  socialText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    paddingHorizontal: 20,
  },
  loginContainer: {
    alignItems: 'center',
    marginBottom: 40,
    flexDirection:'row',
    marginLeft:60
  },
  loginText: {
    fontSize: 16,
    color: '#666',
   marginTop:4
  },
  loginLink: {
    fontSize: 16,
    color: '#807574',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft:10
  },
})