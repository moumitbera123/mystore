import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './Src/AppNavigator'
import 'react-native-gesture-handler'
const App = () => {
  return (
    <View style={{flex:1}}>
      <AppNavigator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})