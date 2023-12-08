import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text} from 'react-native';
import { NativeBaseProvider, VStack, Badge} from "native-base";
import axios from "axios";
import { GLOBALKEYS } from "../../../../globalkeys";



const PendingOrder = () => {
    const [prodIds, setId] = useState([]);

    // useEffect(()=>{
    //     axios.get(`${GLOBALKEYS.myIp4Addr}/products/${parameters.id}`).then(Response => {
    //         setThisItem(Response.data);
    //     })
    //         .catch(e => console.log(e + "could not get any product"));
    // }, []);
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <Text style={styles.titleStyle}>
                    Pending Order
                </Text>
                <View style={styles.innerView}>                  
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    
    innerView: {
        backgroundColor: "#FEFEFE",
        height: "100%",
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center'
    },
    titleStyle: {
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20
    },
});

export default PendingOrder;