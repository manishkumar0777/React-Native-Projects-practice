import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppwriteContext } from '../appwrite/AppwriteContext';
import Loading from '../components/loading';

// Routes
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        console.log('Checking user status...')
        const response = await appwrite.getCurrentUser()
        console.log('User response:', response)
        setIsLoading(false);
        if (response) {
          console.log('Setting isLoggedIn to true');
          setIsLoggedIn(true);
        } else {
          console.log('Setting isLoggedIn to false');
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsLoading(false);
        console.log('Setting isLoggedIn to false due to error');
        setIsLoggedIn(false);
      }
    };

    checkUserStatus();
  }, [appwrite, setIsLoggedIn]);

  
  //for debugging 
  console.log('Rendering stack based on isLoggedIn:', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
