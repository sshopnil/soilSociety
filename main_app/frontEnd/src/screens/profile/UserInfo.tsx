import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const UserInfo = () =>{
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: '#1B1B1B', height: "100%"}}>
            <Text style={styles.titleStyle}>My Profile</Text>
            <View style={styles.viewStyle}>
                <Button title="Log out" onPress={()=> navigation.navigate('login')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        height:'100%',
        padding: 10
    },
    titleStyle: {
        paddingTop: 48,
        backgroundColor: '#1B1B1B',
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20,
        paddingVertical: 20
    },
});

export default UserInfo;