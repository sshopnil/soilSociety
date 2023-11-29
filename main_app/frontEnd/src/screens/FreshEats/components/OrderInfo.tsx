import React from "react";
import {View, Text, StyleSheet} from 'react-native';

interface info{
    orderInfo: any;
}

const OrderInfo : React.FC<info>= ({orderInfo}) =>{
    return(
        <View style={{backgroundColor: "#1B1B1B", alignContent:"center", padding: 10, margin: 10, borderRadius: 20}}>
                    <Text style={{color: '#f8f8f8', fontWeight:'bold', fontSize: 16, alignSelf:'center', marginBottom: 10}}>Order No. {orderInfo?.id} Seller Info </Text>
                    <Text style={{color: '#f8f8f8', fontSize: 16}}>Seller Name: {orderInfo?.seller_name}</Text>
                    <Text style={{color: '#f8f8f8', fontSize: 16}}>Contact: {orderInfo?.contact}</Text>
                </View>
    );
};

const styles = StyleSheet.create({

});

export default OrderInfo;