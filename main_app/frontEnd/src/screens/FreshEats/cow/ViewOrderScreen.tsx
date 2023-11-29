import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import OrderTable from '../components/OrderTable';
import { Divider } from 'react-native-paper';
import OrderInfo from '../components/OrderInfo';
import ComplOrderShow from '../components/ComplOrderShow';
import CancelledOrderShow from '../components/CancelledOrderShow';


const userOrders = [
    {"del_date": null, "status": "pending", "id": 1, "price": 230, "delDate_start": "24-11-2023", "delDate_end": "26-11-23", "seller_name": "Musatafa", "contact" : "+0111115151"},
    {"del_date": "26-11-2023", "status": "completed", "id": 2, "price": 340, "delDate_start": "25-11-2023", "delDate_end": "28-11-23", "seller_name": "Shamim", "contact" : "+01511115151"},
    {"del_date": null, "status": "pending", "id": 3, "price": 3000, "delDate_start": "26-11-2023", "delDate_end": "29-11-23", "seller_name": "Don", "contact" : "+01511115151"}
];


const ViewOrderScreen = () => {

    const [selectedButton, setSelectedButton] = useState(1);

    const [orderInfo, setOrderInfo] = useState(null);
    // console.log(orderInfo);


    const handleButtonPress = (buttonId: any) => {
        setSelectedButton(buttonId);
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
            <Text style={styles.titleStyle}>
                My Orders
            </Text>

            <View style={styles.innerView}>


                <View style={styles.tabView}>

                    <TouchableOpacity
                        onPress={() => handleButtonPress(1)}
                        style={[styles.tabBtn, { backgroundColor: selectedButton === 1 ? '#64ABBC' : '#D8E9A8' }]}
                    >
                        <Text style={{
                            color: selectedButton === 1 ? '#FEFEFE' : '#1B1B1B',
                            textAlign: 'center',
                        }}> Pending </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleButtonPress(2)}
                        style={[styles.tabBtn, { backgroundColor: selectedButton === 2 ? '#64ABBC' : '#D8E9A8' }]}
                    >
                        <Text style={{
                            textAlign: 'center',

                        }}> Completed </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleButtonPress(3)}
                        style={[styles.tabBtn, { backgroundColor: selectedButton === 3 ? '#64ABBC' : '#D8E9A8' }]}
                    >
                        <Text style={{
                            color: selectedButton === 3 ? '#FEFEFE' : '#1B1B1B',
                            textAlign: 'center',
                        }}> Cancelled </Text>
                    </TouchableOpacity>

                </View>
                <View style={{marginTop: 20, marginBottom: 30}}>
                        {selectedButton == 1 && <OrderTable data={userOrders} setOrderID={setOrderInfo}/>}
                        {selectedButton == 2 && <ComplOrderShow orderInfo={userOrders}/>}
                        {selectedButton == 3 && <CancelledOrderShow orderInfo={userOrders}/>}
                </View>
                {/* {orderId && setOrderInfo(userOrders.filter(item=> item.id == orderId))} */}
                <Divider/>
                {orderInfo && selectedButton == 1  && 
                <OrderInfo orderInfo={orderInfo}/>
                }
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20
    },
    innerView: {
        backgroundColor: "#FEFEFE",
        height: "100%",
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    tabView: {
        marginTop: 10,
        backgroundColor: "#D8E9A8",
        height: 46,
        flexShrink: 0,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        paddingTop: 3,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    tabBtn: {

        borderRadius: 20,
        height: 40,
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginRight: 8
    }
});

export default ViewOrderScreen;