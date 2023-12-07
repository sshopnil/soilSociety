// @ts-ignore

import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import 'react-native-gesture-handler';
import { ShoppingCartProvider } from './src/screens/FreshEats/providers/CartContext';
import { AuthContextProvider} from './src/common/AuthContext';

const App = () => {

  console.log("render");
  return (
    <AuthContextProvider>
      <ShoppingCartProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </ShoppingCartProvider>
    </AuthContextProvider>
  );

};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    fontWeight: "700",
    fontSize: 16,
    color: "red"
  }
});


export default App;


