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
    Button-floating
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
      <Text style={styles.titleStyle}>Crop Care</Text>
      <View style={styles.viewStyle}>
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

        <View style={styles.floatButton}>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1B1B1B',
  },

  titleStyle: {
    paddingTop: 42,
    color: "#D8E9A8",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "700",
    paddingLeft: 20,
    paddingVertical: 20
  },
  viewStyle: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    height: '100%',
    marginHorizontal: 5
  },

  // button design
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#76FEC5',
    opacity: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    paddingHorizontal: 50,
    borderRadius: 999,
    opacity: 1,
    elevation: 3,
    backgroundColor: '#1B1B1B',
    margin: 10,
  },
  buttonText:{
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    color: "#D8E9A8",
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

  // float button
  floatButton:{
    position: 'absolute',
    top: '70%',
    left: '80%',
    backgroundColor: "#D8E9A8",
    // justifyContent: 'center',
    textAlign: 'center',
    height: 50,
    width: 50,
    borderRadius: 15,
  }
});

export default CropCareScreen;
