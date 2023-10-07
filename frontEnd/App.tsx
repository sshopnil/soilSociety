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
  );
}

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