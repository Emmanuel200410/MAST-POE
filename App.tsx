import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen'; // Make sure this path is correct
import HomeScreen from './HomeScreen'; // Make sure this path is correct
import CreateMenuScreen from './CreateMenuScreen'; // Make sure this path is correct
import MenuScreen from './menuscreen'; // Make sure this path is correct

export type RootStackParamList = {
  SignIn: undefined;
  HomeScreen: undefined;
  CreateMenuScreen: undefined;
  MenuScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateMenuScreen" component={CreateMenuScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
