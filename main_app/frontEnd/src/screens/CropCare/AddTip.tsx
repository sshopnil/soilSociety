import { View, Text, StyleSheet, Alert, Image, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker";

const AddTip = () => {

    // Stores the selected image URI 
    const [file, setFile] = useState(null); 
  
    // Stores any error message 
    const [error, setError] = useState(null); 
  
    // Function to pick an image from  
    //the device's media library 
    const pickImage = async () => { 
        const { status } = await ImagePicker. 
            requestMediaLibraryPermissionsAsync(); 
  
        if (status !== "granted") { 
  
            // If permission is denied, show an alert 
            Alert.alert( 
                "Permission Denied", 
                `Sorry, we need camera  
                 roll permission to upload images.` 
            ); 
        } else { 
            // console.log("status: ",{status})

            // Launch the image library and get 
            // the selected image 
            const result = 
                await ImagePicker.launchImageLibraryAsync(); 
  
            if (!result.canceled) { 
                // console.log('result: ',result)

                // If an image is selected (not cancelled),  
                // update the file state variable 
                console.log("result.assets: ", result.assets[0].uri)
                setFile(result.assets[0].uri); 
                // Clear any previous errors 
                setError(null); 
            } 
        } 
    }

    return ( 
        <View style={styles.mainContainer}>
        <Text style={styles.titleStyle}>Your Tip</Text>
        <View style={styles.viewStyle}>
            <Text style={styles.textTitle}>Tip Title</Text>
            <TextInput style={styles.textInput} placeholder='Add Title'/>
            <Text style={styles.textTitle}>Tip Description</Text>
            <TextInput multiline style={styles.textInput} placeholder='Add Description'/>
            <Text style={styles.textTitle}>Add Image</Text>
            <TouchableOpacity style={styles.imgBtn}>
                <Text 
                    style={{fontSize: 18}}
                    onPress={pickImage}>Insert</Text>
            </TouchableOpacity>
            {
                file?(
                    <View style={styles.imageContainer}> 
                        <Image source={{ uri: file }} style={styles.image}/> 
                    </View> 
                ):( 
                    // Display an error message if there's  
                    // an error or no image selected 
                    <Text style={styles.errorText}>{error}</Text> 
                )
            }
            
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.floatButton}>
                    <Text style={styles.fltBtnText}>Post Tip</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
};



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
      paddingTop: 50,
    },

    //text
    textContainer:{
        position: 'absolute',
        width: '100%',
    },
    textTitle:{
        fontSize: 20,
        marginHorizontal: 30,
        fontWeight: 'bold',
    },
    paragraph:{
        fontSize: 24,
        marginHorizontal: 30,
        color: 'gray',
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        marginHorizontal: 30,
        marginVertical: 10,
        paddingLeft: 20,
        paddingVertical: 10,
        backgroundColor: '#E4FFF9'
    },

    //image button
    imgBtn:{
        width: 100,
        height: 50,
        marginHorizontal: 30,
        marginTop: 20,
        backgroundColor: '#B5FBDD',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: { 
        borderRadius: 20, 
        marginTop: 16,
        padding: 10, 
        backgroundColor: "#B5FBDD",
        marginHorizontal: 30,
        height: '20%',
    }, 
    image: { 
        // padding: 100,
        width: '100%',
        height: '100%', 
        borderRadius: 8, 
    },
    errorText: { 
        color: "red", 
        marginTop: 16, 
    },
  
    // button design
    buttonContainer:{
        position: 'absolute',
        width: '100%',
        alignItems: 'center',  
        justifyContent: 'center',
        top: '88%',
    },
  
    // float button
    floatButton:{
      backgroundColor: "#D8E9A8",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: 50,
      width: 140,
      borderRadius: 20,
      elevation: 5,
    },
    fltBtnText:{
      color: '1B1B1B',
      fontSize: 24,
      fontWeight: 'bold',
    }
});

export default AddTip