import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ForgotPass from './ForgotPass';


const LoginScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}> Login </Text>
            <TextInput style={styles.textInputStyle} placeholder="Username/Email"/>
            <TextInput style={styles.textInputStyle} placeholder="Password" textContentType="password"/>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('home')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotpassStyle} onPress={()=> navigation.navigate('forgotpass')}>
                <Text style={styles.forgotpassTxt}>Forgot password? click here..</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regStyle} onPress={()=> navigation.navigate('register')}>
                <Text style={styles.forgotpassTxt}>Or, Register Here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:"white",
        height:'100%',
        paddingVertical: 100
    },
    textStyle:{
        marginVertical: 20,
        fontSize: 20,
        fontWeight: '600',
        alignSelf:'center'
    },
    textInputStyle:{
        padding: 10,
        height: 50,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#E0FFB4',
        color: 'black',
        alignSelf: 'center',
        marginVertical: 10
    },
    buttonStyle:{
        backgroundColor: 'black',
        textAlign:"center",
        paddingHorizontal: 40,
        paddingVertical: 10,
        fontWeight:"700",
        borderRadius: 10
    },
    buttonText:{
        textTransform: 'uppercase',
        color:"#D8E9A8",
        fontWeight: '700'
    },
    forgotpassStyle:{
        marginVertical: 40,
        alignSelf:'flex-start',
        marginLeft: 50
    },
    forgotpassTxt:{
        color:'#00a2fa',
        fontWeight: 'bold'
    },
    regStyle:{
        alignSelf:'flex-end',
        marginRight: 50,
        bottom: 60
    },
});

export default LoginScreen;