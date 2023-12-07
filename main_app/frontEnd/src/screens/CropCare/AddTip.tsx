import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const AddTip = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>Your Tip</Text>
      <View style={styles.viewStyle}>
        <Text>Tip Title</Text>
        <TextInput/>
        <Text>Tip Description</Text>
        <TouchableOpacity>
            <Text>Post Tip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#1B1B1B',
      height: '100%',
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
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      backgroundColor: 'white',
      height: '85%',
      marginHorizontal: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    //text title
    textTitle:{
        fontSize:10,
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
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: 50,
      width: 50,
      borderRadius: 15,
      elevation: 5,
    },
    fltBtnText:{
      color: '1B1B1B',
      fontSize: 30,
    }
  });

export default AddTip