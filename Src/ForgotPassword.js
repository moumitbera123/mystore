import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const ForgotPassword = () => {
  return (
    <View>
      <Text>Forgot Password ?</Text>
      <Text>
        Enter email associated with your account and well send and email with instructions to reset your password
      </Text>
      <TextInput style={styles.input} placeholder="enter your email hera" secureTextEntry />
      <Icon />
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})