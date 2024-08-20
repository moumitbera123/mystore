

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
    navigation.navigate('BottomTab')
  }
  const navigatetoforgotpassword = () =>{
    navigation.navigate('ForgotPassword')
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Log into</Text>
        <Text>Your account</Text>
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
      <View>
        <Text>Or sign up with</Text>
      </View>
      <View>

        <Icon name="apple" size={30} color="#000" />


        <Icon name="google" size={30} color="#000" />

        <Icon name="facebook" size={30} color="#000" />
      </View>
      <View>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={navigatetosignup}>
          <Text>Sign up</Text>
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
  },
  input: {
    height: 50,
    borderColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#807574',
    // padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: "center",
    height: 53,
    width: 180,
    marginLeft: 80,
    marginTop:30
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
})