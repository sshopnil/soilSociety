import React from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text} from 'react-native';
import { NativeBaseProvider, VStack, Badge} from "native-base";
import SellerActionCard from "../components/SellerActionCard";



const SellerSection = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <Text style={styles.titleStyle}>
                    Seller Section
                </Text>
                <View style={styles.innerView}>
                    <SellerActionCard title="Pending Orders" notify={2}/>                    
                    <SellerActionCard title="Post an item" notify={0}/>                    
                    <SellerActionCard title="See my items" notify={0}/>                    
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

export default SellerSection;