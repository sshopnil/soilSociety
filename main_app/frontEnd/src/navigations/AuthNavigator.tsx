import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPass from '../screens/Auth/ForgotPass';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';
import TabNavigation from './TabNavigation';
import Chatting from '../screens/Gchats/Chatting'; 



const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
//   console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName="login">
      <Stack.Screen
        name="forgotpass"
        component={ForgotPass}
        options={({route}) => ({
          headerTintColor: "white",
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "black",
          },
          title: "<<userID>>",
        })}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={({route}) => ({
          headerTintColor: "white",
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "black",
          },
          title: "Soil Society",
        })}
      />
      <Stack.Screen 
        name="register" 
        component={RegisterScreen} 
        options={({route}) => ({
          headerTintColor: "white",
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "black",
          },
          title: "Register",
        })}
      />
      <Stack.Screen
        name="home"
        component={DrawerNavigator}
        options={{headerShown:false}}
      />
      
    </Stack.Navigator>
  );
}

export default AuthNavigator;