import axios from "axios";
import { Button, NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { GLOBALKEYS } from "../../../../globalkeys";

interface info {
    orderInfo: any;
}

const OrderInfo: React.FC<info> = ({ orderInfo }) => {

    const handleCancel=async()=>{
        // await axios.get(`${GLOBALKEYS.myIp4Addr}/order/buyer/${email}`)
        // .catch((e) => console.log(e));
    }
    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: "#1B1B1B", alignContent: "center", padding: 10, margin: 10, borderRadius: 20 }}>
                <Text style={{ color: '#f8f8f8', fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginBottom: 10 }}>Order No. {orderInfo?.id} Info </Text>
                <Text style={{ color: '#f8f8f8', fontSize: 16 }}>Est. Delivery Date: {orderInfo?.delDate_start}</Text>
                <Text style={{ color: '#f8f8f8', fontSize: 16 }}>within {orderInfo?.delDate_end}</Text>
                <Button borderRadius={10} mt={5} onPress={handleCancel}>Cancel Order</Button>
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({

});

export default OrderInfo;