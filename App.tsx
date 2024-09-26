import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StackNavigation from './Navigation/StackNavigation/stackNavigation.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client = new QueryClient();
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
