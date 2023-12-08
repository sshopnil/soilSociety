import React from 'react';
import PostCard from '../../../providers/PostCard';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ContainerDiscs = () =>{
    return(
      <View>
        <View style={styles.postContainer}>
          
        </View>
      </View>
    )
}
export default ContainerDiscs;
  
const styles = StyleSheet.create({
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
})
