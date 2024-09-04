
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import AuthStack from './routes/AuthStack';
import AppStack from './routes/AppStack';
import Router from './routes/Router';
import { AppwriteProvider } from './appwrite/AppwriteContext';

function App(): React.JSX.Element {

  return (
    
    <AppwriteProvider>
    <Router />
    </AppwriteProvider>
  );
}

export default App;
