import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const UserInfo = () =>{
    const navigation = useNavigation();
    return(
        <View>
            <Button title="Log out" onPress={()=> navigation.navigate('login')}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default UserInfo;