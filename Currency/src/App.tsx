
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

//Constants 
import { currencyByrupee } from './constants';

//Components
import CurrencyButton from './components/currencybutton';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [resultvalue, setresultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPress = (targetValue : Currency) => {
    if(!inputValue){
      return Snackbar.show({
        text : "Enter the value to Return",
        backgroundColor : "#EA7773",
        textColor : "#000000"
      })
    }
    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedvalue =inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedvalue.toFixed(2)}`

      setresultValue(result);
      setTargetCurrency(targetValue.name);

    } else {
      return Snackbar.show({
        text : "Value is not a Number",
        backgroundColor : "#f4be2c",
        textColor : "#000000"
      })
    }
  }

  return (
    <SafeAreaView>
      <StatusBar/>

      <View style = {styles.container}>
        <View style = {styles.topContainer}>
          <View style = {styles.rupeeContainer}>
            <Text style = {styles.rupeeText}>₹</Text>
            <TextInput
             maxLength={14}
             value={inputValue}
             clearButtonMode='always'
             onChangeText={setInputValue}
             keyboardType='number-pad'
             placeholder='Enter the amount in ₹'
             style = {styles.inputText}
             >  
            </TextInput>
          </View>
          {resultvalue && (
            <Text style = {styles.resultText}>
              {resultvalue}
            </Text>
          )}
        </View>
        <View style = {styles.bottomContainer}>
          <FlatList 
          numColumns={3}
          data={currencyByrupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable style = {[
              styles.button,
              targetCurrency === item.name && styles.selected
              ]}
              onPress={() => buttonPress(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
          )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
   
    backgroundColor : '#f2f2f2',
    alignItems : 'center'
  },
  topContainer : {
    marginTop : 20,
    justifyContent : 'space-evenly',
    alignItems : 'center'
  },
  rupeeContainer : {
    flexDirection : 'row',
    alignItems : 'center',
  },

  rupeeText : {
    fontSize : 28,
    fontWeight : 'bold',
    color : '#000',
    margin : 10
  },
  resultText : {
    fontSize : 32,
    marginTop : 20,
    fontWeight : '900',
    color : '#000'
  },
  bottomContainer : {
   marginTop : 40,
  },
  button : {
    margin : 12,
    height  : 60,
    width : 100,
    borderRadius : 12,
    backgroundColor : '#fff',
    elevation : 2,
    shadowOffset : {
      width : 1,
      height : 1
    },
    shadowColor : '#333',
    shadowOpacity : 0.1,
    shadowRadius : 1
  },
  selected : {
  backgroundColor : '#ffeaa7'
  },

  inputText : {
    height : 50,
    width : 200,
    padding : 8,
    borderWidth : 1,
    borderRadius : 4,
    backgroundColor : '#ffffff',
    fontSize : 22,
    fontWeight : '800',
  }



  
  
});

export default App;
