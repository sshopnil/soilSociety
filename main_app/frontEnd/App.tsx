// @ts-ignore

import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import 'react-native-gesture-handler';
import { ShoppingCartProvider } from './src/screens/FreshEats/providers/CartContext';

const App = ()=>{

  return (
    <ShoppingCartProvider>
      <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    </ShoppingCartProvider>
  );

};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer:{
    fontWeight: "700",
    fontSize: 16,
    color: "red"
  }
});


export default App;


