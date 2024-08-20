import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const SignUp = () => {
  const navigation = useNavigation();
  const navigatetoLoginscreen = () =>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Text>Create</Text>
      <Text>Your account</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Enter Your name" />
        <TextInput style={styles.input} placeholder="Email adress" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={navigatetoLoginscreen}>Sign Up</Text>
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
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={navigatetoLoginscreen}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

}

export default SignUp

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
    marginLeft: 80
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