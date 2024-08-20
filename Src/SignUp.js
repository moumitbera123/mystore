import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const navigatetoLoginscreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>
      <Text style={styles.subtitle}>Your Account</Text>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Enter Your Name" />
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={navigatetoLoginscreen}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
        <TouchableOpacity onPress={navigatetoLoginscreen}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
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
    color: '#666',
    textAlign: 'center',
    marginRight:140,
    marginTop:20
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    // borderColor: '#ccc',
    // borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,

  },
  button: {
    backgroundColor: '#807574',
    height: 53,
    width:150,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
   marginLeft:100,
   marginTop:30
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
});
