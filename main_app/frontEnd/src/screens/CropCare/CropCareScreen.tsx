import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Title } from 'react-native-paper';
import PostCard from '../../providers/PostCard';
import { black, green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import ContainerTips from './Container/ContainerTips';
import ContainerDiscs from './Container/ContainerDiscs';
/*
flow:
  mainContainer
    buttonContainer
      button 1 - Tips
      button 2 - Discs
    Container
      posts
*/
const stack = createStackNavigator()

// start
const CropCareScreen = () =>{
  const [showContainerTips, setContainerTips] = useState(false);
  const [showContainerDiscs, setContainerDiscs] = useState(false)

  const handleButton1Press = () => {
    setContainerTips(true);
    setContainerDiscs(false);
  };

  const handleButton2Press = () => {
    setContainerTips(false);
    setContainerDiscs(true);
  };

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Crop Care Screen</Text>
      
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
            <Text style={styles.buttonText}>Tips</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
            <Text style={styles.buttonText}>Discussions</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.postContainer}>
        {showContainerTips && <ContainerTips/>}
        {showContainerDiscs && <ContainerDiscs/>}
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    marginTop: 40,
    backgroundColor: '#E4FFF9',
  },

  // button design
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#76FEC5',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    paddingHorizontal: 50,
    borderRadius: 999,
    opacity: 1,
    elevation: 3,
    backgroundColor: 'green',
  },
  buttonText:{
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  // post card design
  postContainer:{
    backgroundColor: '#76FEC5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 16,
    marginTop: 4,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});

export default CropCareScreen;
