//@ts-nocheck
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, FormControl, Input, Divider, NativeBaseProvider, useTheme, Box, Button, Checkbox} from "native-base";
import DataTableComponent from "./components/DataTable";
import { useShoppingCart } from "./providers/CartContext";
import { useAuth } from "../../common/AuthContext";
import { GLOBALKEYS } from "../../../globalkeys";
import axios from "axios";


const OrderItem = () => {
    const parameters = useRoute().params;
    const date = new Date();
    // console.log(date.getUTCDate())//today
    const [formData, setData] = useState({});
    // console.log(parameters);
    const {cart, removeAll} = useShoppingCart();
    const navigator = useNavigation();
    let totalPrice = 0;

    const {email} = useAuth();


    if(cart.length > 0)
    {
        cart.map(item=> totalPrice += item.price * item.qty);
    }
   

    const genStartDate = ()=>{
        if(date.getMonth() % 2 == 0){
            if(date.getDate()+8 > 31){
                const mon = date.getMonth()+1;

                return date.getDate()-23+"-"+mon+"-"+date.getFullYear();
            }
        }
        else if(date.getDate()+8 > 30){
            const mon = date.getMonth()+1;

                return date.getDate()-22+"-"+mon+"-"+date.getFullYear();
        }
        return date.getDate()+8+"-"+date.getMonth()+"-"+date.getFullYear();
    }

    const genEndDate=()=>{
        if(date.getMonth() % 2 == 0){
            if(date.getDate()+11 > 31){
                const mon = date.getMonth()+1;

                return date.getDate()-20+"-"+mon+"-"+date.getFullYear();
            }
        }
        else if(date.getDate()+8 > 30){
            const mon = date.getMonth()+1;

                return date.getDate()-19+"-"+mon+"-"+date.getFullYear();
        }
        return date.getDate()+11+"-"+date.getMonth()+"-"+date.getFullYear();
    }

    // console.log(genStartDate(), " ----", genEndDate());
    // {
    //     "status": "order status",
    //     "price": "total price",
    //     "delDate_start": "date",
    //     "delDate_end": "date",
    //     "buyer_email": "dev@gmail.com",
    //     "buyer_address": "address*"
    //   }

    let arr = parameters?.name !== null ? [{id: parameters?.id, seller_email: parameters?.seller_email, qty: parameters?.qty}] : cart.map((item)=> {
        return {id: item.id,
                seller_email: item.seller_email,
                qty: item.qty}
    });
    console.log(arr)
    const handleSubmit= async ()=>{
        // console.log(formData);
        
        const body={
            status: 1,
            price: parameters.name !== null ?  parameters?.price * parameters?.qty : totalPrice,
            delDate_start: genStartDate(),
            delDate_end: genEndDate(),
            buyer_email: email,
            products: arr,
            ...formData
        }
        // console.log(body);

        if(parameters?.name !== null){
            await axios.put(`${GLOBALKEYS.myIp4Addr}/products/update_order/${parameters.id}/${parameters.qty}`)
        }
        else{
            await Promise.all(cart.map((item)=>{
                axios.put(`${GLOBALKEYS.myIp4Addr}/products/update_order/${item.id}/${item.qty}`)
                .catch(e=> console.log(e));
            }));
        }


        await axios.post(`${GLOBALKEYS.myIp4Addr}/order/add/`, body)
        .then(()=> {
            removeAll(); //cart remove
            navigator.navigate('order-success');
        })
        .catch((e)=> console.log(e));


    }
    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: '#1B1B1B', height: "100%" }}>
                <Text style={styles.titleStyle}>Order Confirmation</Text>
                <View style={styles.viewStyle}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.Tablecontainer}>
                                {parameters.name !== null ?
                                    <DataTableComponent data={[parameters]}/>
                                    :
                                    <DataTableComponent data={cart}/>
                                }
                            </View>
                            { parameters.name !== null ?
                                <Text 
                                    style={{ marginLeft: 25, fontWeight: 'bold', fontSize: 16 }}>
                                        Total: {parameters?.price * parameters?.qty}৳ {'(Only Cash On Delivery Available)'}
                                </Text>
                                :
                                <Text 
                                    style={{ marginLeft: 25, fontWeight: 'bold', fontSize: 16 }}>
                                        Total: {totalPrice}৳ {'(Only Cash On Delivery Available)'}
                                </Text>
                            }
                            <View style={styles.addressStyle}>
                                <Box>
                                    <Text bold fontSize="xl" mb="4">
                                        Billing and Shipping Information:
                                    </Text>
                                    <FormControl mb="5">
                                        <FormControl.Label>Enter Billing and Shipping Address</FormControl.Label>
                                        <Input 
                                        value={formData?.buyer_address}
                                        onChangeText={(val)=>{
                                            setData({...formData, buyer_address:  val})
                                        }}/>
                                        <FormControl.HelperText>
                                            Give where to send percel and recieve money
                                        </FormControl.HelperText>
                                        <Checkbox mt={10} isInvalid={false} colorScheme='green' onChange={()=>console.log('checked')}>
                                            Confirm Order
                                        </Checkbox>
                                    </FormControl>
                                    <Divider />
                                </Box>
                            </View>
                            <Box flexDirection={'row'} mt={5}>
                            <Button variant={'subtle'} colorScheme={'success'} flex={.5} onPress={handleSubmit}>Place Order</Button>
                            <Button variant={'subtle'} colorScheme={'danger'} flex={.5} onPress={()=> navigator.navigate('fhome')}>Cancel Order</Button>
                            </Box>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        </NativeBaseProvider>
    );
};


const styles = StyleSheet.create({
    billHeaderText: {
        fontSize: 18
    },
    addressStyle: {
        padding: 25
    },
    Tablecontainer: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: 50,
        backgroundColor: '#D8E9A8',
        fontWeight: 'bold'
    },
    text: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        margin: 6
    },
    viewStyle: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
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
export default OrderItem;