import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () =>{
    const navigation = useNavigation();
    return(
        <View>
            <Button title="goto home" onPress={()=> navigation.navigate('home')}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default LoginScreen;