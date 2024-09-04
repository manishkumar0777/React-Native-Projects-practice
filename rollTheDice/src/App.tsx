
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}:DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}></Image>
    </View>
  )
}

function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random()*6) + 1;

    switch (randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break; 
    }

    ReactNativeHapticFeedback.trigger("impactMedium", options);

  }

  return (
    <View style={styles.Container}>
      <Dice imageUrl={diceImage} />
      <Pressable style = {styles.PressBtn} onPress={rollDiceOnTap}>
        <Text style={styles.PressText}>
          Roll The Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
 
  Container: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
 
  diceImage : {
    width: 200,
    height : 200,
    borderRadius : 30,
  },

  PressBtn:{
   
    padding : 10,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 40,

  },

  PressText :{
    fontSize : 24,
    backgroundColor : '#fff',
  }
});

export default App;
