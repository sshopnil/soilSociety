import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { getData} from "../FreshEats/AsyncStorageUtils";
import axios from "axios";
import { GLOBALKEYS } from "../../../globalkeys";
import { Image, NativeBaseProvider, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../common/AuthContext";



const UserInfo = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState();
    const {email, setLogout} = useAuth();


    const fetchData = ()=>{
        axios.get(`${GLOBALKEYS.myIp4Addr}/users/${email}`).then(Response => setUser(Response.data))
            .catch(e => console.log(e));
    }
    useEffect(() => {
        console.log(email);
        setTimeout(() => {    
            fetchData();
          }, 2000);
    }, []);

    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: '#1B1B1B', height: "100%" }}>
                <Text style={styles.titleStyle}>My Profile</Text>
                <View style={styles.viewStyle}>
                    <Image style={{ height: 120, width: 120, borderRadius: 75, alignSelf: 'center' }} source={{ uri: user?.image ? user?.image : "https://tinyurl.com/hkcbwn5s" }} alt="No image"/>
                    <Text style={styles.textName}>{user?.name}</Text>
                    <Text style={styles.extraText}>Seller Status: <Text style={{fontSize: 18, fontWeight:'300'}}>{user?.user_role == 'general'? 'Not a seller': 'Active'}</Text></Text>
                    <Button
                        onPress={setLogout}
                        variant={'subtle'}
                        colorScheme={'rose'}
                        mt={'100%'}
                        > Logout </Button>
                </View>
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    extraText:{
        fontSize:18,
        fontWeight: '700',
    },
    textName:{
        fontSize:30,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom:"20%"
    },
    viewStyle: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        height: '100%',
        padding: 10,
        flexDirection:'column'
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