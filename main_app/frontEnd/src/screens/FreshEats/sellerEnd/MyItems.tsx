import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import { NativeBaseProvider, VStack, Badge, useSafeArea } from "native-base";
import { useAuth } from "../../../common/AuthContext";
import { MyItemCard } from "../components/MyItemCard";
import { GLOBALKEYS } from '../../../../globalkeys';
import axios from "axios";


const MyItems = () => {
    const { email } = useAuth();
    const [products, setProducts] = useState();


    useEffect(() => {
        axios.get(`${GLOBALKEYS.myIp4Addr}/products/mail/${email}`).then(Response => {
            setProducts(Response.data);
        })
            .catch(e => console.log(e + "could not get any product"));
    }, []);



    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <Text style={styles.titleStyle}>
                    My Items
                </Text>
                <View style={styles.innerView}>

                    <Text style={{fontSize:20, marginTop: 10}}>Total Items: {products?.length}</Text>
                    {products?.length != 0 ?
                        <FlatList
                            data={products}
                            keyExtractor={item => item.prod_id}
                            renderItem={({ item }) => {
                                return (
                                    <MyItemCard qty={item.qty} id={item.prod_id} title={item.name} img_src={item.image} price={item.price} />
                                )
                            }}
                        />
                        :
                        <Text>No product availabe</Text>
                    }
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

export default MyItems;