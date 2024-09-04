import { StyleSheet, Text, View, SafeAreaView , Image} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

//react-native elements
import { FAB} from '@rneui/themed'

//snackbar
import Snackbar from 'react-native-snackbar'

//context API
import {AppwriteContext} from '../appwrite/AppwriteContext'

//type of information to shown on thw home page
type UserObj = {
  name : string;
  email : string;
}

const Home = () => {

  //creating state for userdata accepting userobj
  const[userdata, setUserdata] = useState<UserObj>();

  //these are the services from appwrite context
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)

  // the logout handling with the help of services we created in appwrie logout()
  const handleLogout = () => {
    appwrite.logout()
    .then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text : 'Logout Successful',
        duration : Snackbar.LENGTH_SHORT
      })
    })
  }

  //useEffect hooks for setting the data in userObj type
  useEffect(() => {
    appwrite.getCurrentUser()
    .then(response => {
      if(response){
        const user : UserObj = {
          name : response.name,
          email : response.email
        }
        //injecting the data in userdata state
        setUserdata(user)
      }
    })
  }, [appwrite])
  

  return (
    <SafeAreaView style ={styles.container}>
      <View style = {styles.welcomeContainer}>
        
      <Text style = {styles.message}>
        Build Fast . Scale big . All in one Place.
      </Text>

      {/* if the userData is availabel then show the data */}
      {userdata && (
        <View style = {styles.userContainer}>
          <Text style ={styles.userDetails}> Name : {userdata.name}</Text>
          <Text style ={styles.userDetails}>Email : {userdata.email}</Text>
        </View>  
      )}


      </View>

      {/* logout button creation  */}
      <FAB 
        placement='right'
        color='#f02e65'
        size = "large"
        title="logout"
        icon = {{name : 'logout', color: '#FFFFFF'}}
        onPress={handleLogout}
        />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor :'#0b0d32'
  },

  welcomeContainer : {
    padding : 12,
    flex : 1,
    alignItems : 'center'
  },

  message : {
    fontSize : 26,
    fontWeight : '500',
    color : '#ffffff',
  },
  userContainer : {
    marginTop : 24,
  },

  userDetails : {
    fontSize : 20,
    color : '#ffffff',
  },

})

export default Home

