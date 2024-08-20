import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
const ForgotPassword = () => {
  const navigation = useNavigation()
  const navigatetologin =()=>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={navigatetologin}>
        <Icon name="angle-left" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter the email associated with your account and we'll send you instructions to reset your password.
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope-o" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email here"
          keyboardType="email-address"
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  
  },
  arrowContainer: {
    marginTop: 30,
    marginLeft:10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 80,
    marginRight:70
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    fontWeight:'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 40,
    marginTop: 120,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#807574',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
