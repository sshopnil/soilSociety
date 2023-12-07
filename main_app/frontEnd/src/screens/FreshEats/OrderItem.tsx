//@ts-nocheck
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, FormControl, Input, Divider, NativeBaseProvider, useTheme, Box, Button, Checkbox} from "native-base";
import DataTableComponent from "./components/DataTable";
import { useShoppingCart } from "./providers/CartContext";



const OrderItem = () => {
    const parameters = useRoute().params;
    // console.log(parameters);
    const {cart, removeAll} = useShoppingCart();
    const navigator = useNavigation();
    let totalPrice = 0;
    if(cart.length > 0)
    {
        cart.map(item=> totalPrice += item.price * item.qty);
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
                                        <Input />
                                        <FormControl.HelperText>
                                            Give where to send percel and recieve money
                                        </FormControl.HelperText>

                                        <FormControl.Label pt={5}>Confirm Billing and Shipping Address</FormControl.Label>
                                        <Input/>
                                        <FormControl.HelperText>
                                            Confirm the address
                                        </FormControl.HelperText>
                                        <Checkbox mt={10} isInvalid={false} colorScheme='green' onChange={()=>console.log('checked')}>
                                            Confirm Order
                                        </Checkbox>
                                    </FormControl>
                                    <Divider />
                                </Box>
                            </View>
                            <Box flexDirection={'row'} mt={5}>
                            <Button variant={'subtle'} colorScheme={'success'} flex={.5} onPress={()=> {navigator.navigate('order-success'); removeAll()}}>Place Order</Button>
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