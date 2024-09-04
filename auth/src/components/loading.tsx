import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Loading overlays

const loading = () => {
  return (
    <View style = {styles.contaier}>
      <ActivityIndicator size="large" color='#f98h53' />
      <Text>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contaier : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center',
    }
})

export default loading

