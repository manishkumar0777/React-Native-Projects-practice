import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackPramList } from '../App'

import ProductItem from '../components/ProductItem'
import Seperator from '../components/Seperator'

//Data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">


const Home = ({navigation} : HomeProps) => {
  return (
    <View style ={styles.container}>
      <FlatList 
      data ={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Seperator}
      renderItem={({item}) => (
        <Pressable 
        onPress={() => {
          navigation.navigate('Details', {
            products : item
          })
        }}>
          <ProductItem product={item} />
        </Pressable>
      )}

      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'flex-start',
    justifyContent : 'center',

    padding : 12,
    backgroundColor : '#FFFFFF'
  }
})

export default Home

