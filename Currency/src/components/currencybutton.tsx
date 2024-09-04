import React from 'react'

import type { PropsWithChildren } from 'react'
import {View, StyleSheet, Text} from 'react-native'

type currencybuttonProps = PropsWithChildren<{
    name : string;
    flag : string;

}>

const currencybutton = (props : currencybuttonProps) : JSX.Element => {
    return (
        <View style = {styles.buttonContainer}>
            <Text style = {styles.flag}>{props.flag}</Text>
            <Text style = {styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    buttonContainer : {
        alignItems : 'center'
    },

    flag :{
        fontSize : 28,
        color : '#ffffff',
        marginBottom : 4
    },

    name : {
        fontSize : 14,
        color : '#2d3436'
    }

})

export default currencybutton