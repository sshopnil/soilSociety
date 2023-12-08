import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import OrderTable from '../components/OrderTable';
import { Divider } from 'react-native-paper';
import OrderInfo from '../components/OrderInfo';
import ComplOrderShow from '../components/ComplOrderShow';
import CancelledOrderShow from '../components/CancelledOrderShow';
import axios from 'axios';
import { GLOBALKEYS } from '../../../../globalkeys';
import { useAuth } from '../../../common/AuthContext';


const userOrders = [
    { "del_date": null, "status": "pending", "id": 1, "price": 230, "delDate_start": "24-11-2023", "delDate_end": "26-11-23", "seller_name": "Musatafa", "contact": "+0111115151" },
    { "del_date": "26-11-2023", "status": "completed", "id": 2, "price": 340, "delDate_start": "25-11-2023", "delDate_end": "28-11-23", "seller_name": "Shamim", "contact": "+01511115151" },
    { "del_date": null, "status": "pending", "id": 3, "price": 3000, "delDate_start": "26-11-2023", "delDate_end": "29-11-23", "seller_name": "Don", "contact": "+01511115151" }
];


const ViewOrderScreen = () => {

    const { email } = useAuth();
    const [orders, setOrders] = useState();

    const fetchData = async () => {
        await axios.get(`${GLOBALKEYS.myIp4Addr}/order/buyer/${email}`)
            .then((Response) => setOrders(Response.data))
            .catch((e) => console.log(e));
    }

    useEffect(() => {
        fetchData();
    }, [])


    const filterResultsByStat = (stat: number) => {
        //price === 1(poultry) || 2(dairy) || 3(veg)
        return orders?.filter(result => {
            return result?.status === stat;
        });
    };


    const [selectedButton, setSelectedButton] = useState(1);

    const [orderInfo, setOrderInfo] = useState(null);
    // console.log(orderInfo);


    const handleButtonPress = (buttonId: any) => {
        setSelectedButton(buttonId);
    };

    console.log(filterResultsByStat(1));
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
            <Text style={styles.titleStyle}>
                My Orders
            </Text>

            <View style={styles.innerView}>


                <ScrollView>
                    <View style={styles.tabView}>

                        <TouchableOpacity
                            onPress={() => handleButtonPress(1)}
                            style={[styles.tabBtn, { backgroundColor: selectedButton === 1 ? '#64ABBC' : '#D8E9A8' }]}
                        >
                            <Text style={{
                                color: selectedButton === 1 ? '#FEFEFE' : '#1B1B1B',
                                textAlign: 'center'
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
                    <View style={{ marginTop: 20, marginBottom: 30 }}>
                        {selectedButton == 1 && <OrderTable data={filterResultsByStat(1)} setOrderID={setOrderInfo} />}
                        {selectedButton == 2 && <ComplOrderShow orderInfo={filterResultsByStat(2)} />}
                        {selectedButton == 3 && <CancelledOrderShow orderInfo={filterResultsByStat(3)} />}
                    </View>
                    {/* {orderId && setOrderInfo(userOrders.filter(item=> item.id == orderId))} */}
                    <Divider />
                    {orderInfo && selectedButton == 1 &&
                        <OrderInfo orderInfo={orderInfo} />
                    }
                </ScrollView>
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
        alignSelf: 'center',
        borderRadius: 20,
        paddingTop: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabBtn: {

        borderRadius: 20,
        height: 40,
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
    }
});

export default ViewOrderScreen;