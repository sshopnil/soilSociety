import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Title } from 'react-native-paper';
import PostCard from '../../providers/PostCard';
<<<<<<< HEAD
import { black, green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import ContainerTips from './Container/ContainerTips';
import ContainerDiscs from './Container/ContainerDiscs';
import { useNavigation } from '@react-navigation/native';

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
=======


>>>>>>> parent of 01655b6a (Merge pull request #20 from sshopnil/ta-dec-6)
const stack = createStackNavigator()

const CropCareScreen = () =>{
    return(
        <View>
            <Text style={styles.title}>Crop Care Screen</Text>
            
            <View>
                <Text>Tips</Text>
                <Text>Discussion</Text>
            </View>
            
            <PostCard title='1st Quesion Title' question='Quisque sollicitudin ipsum sem, vel fermentum felis rutrum nec.'
                imageUrl='https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0'/>
            
            <PostCard title='2nd Questoin Title' question='Quisque sollicitudin ipsum sem, vel fermentum felis rutrum nec.'
                imageUrl='https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0'/>
        </View>
    );
};




const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    backgroundColor: '#E4FFF9',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    borderWidth: 1,
  },
  textContainer: {
    flex: 1, // Takes up remaining horizontal space
  },
  title: {
    fontSize: 18,
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
