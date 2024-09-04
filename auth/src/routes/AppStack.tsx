import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//screens
import Home from '../screens/Home'

//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//taking parameters from another screens
export type AppStackParamList = {
    Home : undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (

    <Stack.Navigator
    screenOptions={{
        headerTitleAlign : 'center',
        headerBackTitleVisible : false,
    }}
    >
        <Stack.Screen name = 'Home' component={Home} /> 
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})