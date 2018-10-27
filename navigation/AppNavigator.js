import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';


const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator( { Onboarding: OnboardingScreen, SignUp: SignUpScreen, LogIn: LogInScreen } );

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator(
  {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);