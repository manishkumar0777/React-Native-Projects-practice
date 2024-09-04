import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Home from '../screens/Home'


//these are the values or variable that is passed through one screen to another screen
export type AuthStackParamList = {
    Signup : undefined;
    Login : undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (

    //Screen name and implementing 
    <Stack.Navigator
    screenOptions={{
        headerTitleAlign : 'center',
        headerBackTitleVisible : false,
    }}
    >
        <Stack.Screen name = 'Login' component={Login}></Stack.Screen>
        <Stack.Screen name = 'Signup' component={Signup}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthStack
