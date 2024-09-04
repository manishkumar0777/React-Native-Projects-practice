

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  const [randomBackground , setRandomBackground] = useState("#ffffff");
  const [randomBackground1 , setRandomBackground1] = useState("#ffffff");
  const [randomBackground2 , setRandomBackground2] = useState("#ffffff");
  const [randomBackground3 , setRandomBackground3] = useState("#ffffff");
  const [randomBackground4 , setRandomBackground4] = useState("#ffffff");
  const [randomBackground5 , setRandomBackground5] = useState("#ffffff");
  const [randomBackground6 , setRandomBackground6] = useState("#ffffff");
  const [randomBackground7 , setRandomBackground7] = useState("#ffffff");
  const [randomBackground8 , setRandomBackground8] = useState("#ffffff");
  const [randomBackground9 , setRandomBackground9] = useState("#ffffff");
  const [randomBackground10 , setRandomBackground10] = useState("#ffffff");
  const [randomBackground11 , setRandomBackground11] = useState("#ffffff");
  const [randomBackground12 , setRandomBackground12] = useState("#ffffff");
  const [randomBackground13 , setRandomBackground13] = useState("#ffffff");
  const [randomBackground14 , setRandomBackground14] = useState("#ffffff");
  const [randomBackground15 , setRandomBackground15] = useState("#ffffff");



  const generaterandomcolor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)];
    }
    return color;
  };

  const generatecolor = () => {
    setRandomBackground(generaterandomcolor());
    setRandomBackground1(generaterandomcolor());
    setRandomBackground2(generaterandomcolor());
    setRandomBackground3(generaterandomcolor());
    setRandomBackground4(generaterandomcolor());
    setRandomBackground5(generaterandomcolor());
    setRandomBackground6(generaterandomcolor());
    setRandomBackground7(generaterandomcolor());
    setRandomBackground8(generaterandomcolor());
    setRandomBackground9(generaterandomcolor());
    setRandomBackground10(generaterandomcolor());
    setRandomBackground11(generaterandomcolor());
    setRandomBackground12(generaterandomcolor());
    setRandomBackground13(generaterandomcolor());
    setRandomBackground14(generaterandomcolor());
    setRandomBackground15(generaterandomcolor());
  };


  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style= {[styles.horizontal, {backgroundColor:randomBackground}]}>
      <View style={[styles.circular, {backgroundColor:randomBackground1} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground2} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground3} ]}></View>
    </View>

    <View style= {[styles.horizontal, {backgroundColor:randomBackground}]}>
      <View style={[styles.circular, {backgroundColor:randomBackground4} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground5} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground6} ]}></View>
    </View>

    <View style= {[styles.horizontal, {backgroundColor:randomBackground}]}>
      <View style={[styles.circular, {backgroundColor:randomBackground7} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground8} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground9} ]}></View>
    </View>

    <View style= {[styles.horizontal, {backgroundColor:randomBackground}]}>
      <View style={[styles.circular, {backgroundColor:randomBackground10} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground11} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground12} ]}></View>
    </View>

    <View style= {[styles.horizontal, {backgroundColor:randomBackground}]}>
      <View style={[styles.circular, {backgroundColor:randomBackground13} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground14} ]}></View>
      <View style={[styles.circular, {backgroundColor:randomBackground15} ]}></View>
    </View>


    <View style= {[styles.container, {backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generatecolor}>
        <View style = {styles.actionBtn}>
          <Text style = {styles.actionBtnText}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },

  actionBtn :{
    borderRadius : 12,
    backgroundColor : "#6a1b4d",
    paddingVertical : 10,
    paddingHorizontal: 40
  },
  
  actionBtnText : {
    fontSize : 24,
    color : "#ffffff",
    textTransform : "uppercase"

  },
  horizontal :{
    flexDirection : 'row',
    padding  : 8,
  },
   circular : {
    margin : 15,
    width  : 100,
    height : 100,
    borderRadius : 150,
    elevation : 20,

   }
});

export default App;
