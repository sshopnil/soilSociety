import React from 'react';
import PostCard from '../../../providers/PostCard';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ContainerTips = () =>{
    return(
      <View>
        <View style={styles.postContainer}>
          <PostCard title='1st Quesion Title' question='Quisque sollicitudin ipsum sem, vel fermentum felis rutrum nec.'
              imageUrl='https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0'/>
          
          <PostCard title='2nd Questoin Title' question='Quisque sollicitudin ipsum sem, vel fermentum felis rutrum nec.'
              imageUrl='https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0'/>
        </View>
      </View>
    )
}
export default ContainerTips
  
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
