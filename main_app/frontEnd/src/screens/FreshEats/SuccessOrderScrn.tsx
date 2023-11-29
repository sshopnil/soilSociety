//@ts-nocheck
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, NativeBaseProvider, Box} from "native-base";
import { Feather } from '@expo/vector-icons';


const SuccessOrderScrn = () => {
    // console.log(parameters);
    const navigator = useNavigation();
    setTimeout(() => {
        navigator.navigate('fhome');
      }, 2500);
    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: '#1B1B1B', height: "100%" }}>
                <Text style={styles.titleStyle}>Order</Text>
                <View style={styles.viewStyle}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Box alignContent={'center'} mt={'1/2'} padding={50}>
                                <Feather style={{alignSelf:'center'}} name="check-circle" size={60} color="#1B1B1B" />
                                <Text mt={5} alignSelf={'center'} bold color={'#1B1B1B'} style={{fontSize:20}}>Order Placed Successfully!</Text>
                                <Text mt={5} alignSelf={'center'} color={'#1B1B1B'} style={{fontSize:20}}>Order ID: #23njjn32</Text>
                            </Box>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        </NativeBaseProvider>
    );
};


const styles = StyleSheet.create({
    viewStyle: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#D8E9A8',
        height: '100%',
        marginHorizontal: 5,
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
    container: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 100
    },
});
export default SuccessOrderScrn;