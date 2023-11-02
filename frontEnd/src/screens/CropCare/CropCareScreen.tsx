import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import PostCard from '../../providers/PostCard';



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
            {/* <Image source={require('https://th.bing.com/th/id/R.e1831c82039795788181eed7d87909f7?rik=7l4wuGS2svROlA&pid=ImgRaw&r=0')}
                    style={{width: 40, height: 40}} />;  */}
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
