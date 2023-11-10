import React from 'react';
import Users from './Users';
import { ScrollView, StyleSheet, View, Text, Image, requireNativeComponent  } from 'react-native';

const Box = () =>{

}

const OnlineUsersList = () =>{

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.mainContainer}
      scrollEventThrottle={16}

    >
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello my "/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      <Users imageUri={require('../../../../assets/post-card-images/sample-crop.jpg')} name="hello"/>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 8,

  },
});

export default OnlineUsersList;