import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import PostCard from '../../providers/PostCard';

const CropCareScreen = () =>{
    
    return(
        <View>
            <Text style={styles.title}>This is Crop care Screen</Text>
            <PostCard title='The 1st post' question='my question is big.my question is big.my question is big.my question is big.'
                imageUrl='frontEnd/assets/post-card-images/sample-crop.jpg'/>
            <PostCard title='The 2nd post' question='my question is big.my question is big.my question is big.my question is big.'
                imageUrl='frontEnd/assets/post-card-images/sample-crop.jpg'/>    
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
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default CropCareScreen;
