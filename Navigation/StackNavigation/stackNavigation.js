import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../custom_modules/screens/HomeScreen';
import CreatePostScreen from '../../custom_modules/screens/CreatePostScreen';
import TitleScreen from '../../custom_modules/screens/TitleScreen';

const stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <stack.Screen name="Home" component={Home}></stack.Screen>
      <stack.Screen name="CreatePost" component={CreatePostScreen}></stack.Screen>
      <stack.Screen name="Title" component={TitleScreen}></stack.Screen>
    </stack.Navigator>
  );
};
export default StackNavigation;
