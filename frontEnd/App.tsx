<<<<<<< HEAD
import React from 'react';
import { StyleSheet} from 'react-native';
import TabNavigation from './src/navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = ()=>{

  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';



const App = () =>
{
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>
        Hello world!
      </Text>
    </View>
>>>>>>> 39d190db75ff79fba443da53b9a50c2646dbecf4
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