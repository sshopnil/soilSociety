import React from 'react';
import Users from './Users'; 
import { ScrollView, StyleSheet, View, Text, Image  } from 'react-native';

const Box = () =>{

}

const OnlineUsersList = () =>(

  <View>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.scrollContainer}
      scrollEventThrottle={16}
    >
      <View style={{height:60, width:60,marginLeft: 20}}>
        <Image source={require('../../../../assets/post-card-images/sample-crop.jpg')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          height: null,
          width: null, 
          borderRadius: 30, 
          overflow: 'hidden', 
        }}/>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
    scrollContainer: {
        marginTop: 15,
    },
});

export default OnlineUsersList;