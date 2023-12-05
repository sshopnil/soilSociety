import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ItemCard } from "../components/ItemCard";
import { useShoppingCart } from "../providers/CartContext";
import { Title } from "react-native-paper";
import { Button, NativeBaseProvider } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const ViewCartScreen = () => {

    const { cart, removeAll } = useShoppingCart();
    const navigation = useNavigation();
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <Text style={styles.titleStyle}>
                    My Cart
                </Text>
                <View style={styles.innerView}>
                    {/* card inside */}
                    <Text style={styles.titleText}>Cart Items</Text>
                    {cart.length == 0 ?
                        <Text style={styles.titleText}>
                            No item were added to cart!
                        </Text>
                        :
                        <View style={{justifyContent:'space-between'}}>
                            <FlatList
                                data={cart}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <ItemCard qty={item.qty} id={item.id} title={item.name} img_src={item.img_src} price={item.price} />
                                    )
                                }}
                            />
                            <View style={{ flexDirection: "row", marginTop: 40, alignSelf:'flex-end'}}>
                                <Button 
                                    flex={.5} 
                                    size={'md'} 
                                    variant={'subtle'} 
                                    colorScheme={'teal'}
                                    style={{alignContent:'center'}}
                                    leftIcon={<FontAwesome name="money" size={18} color="teal" />}
                                    onPress={()=> navigation.navigate('order-item', { name: null, price: null, qty: null})}
                                    >
                                        Buy Now
                                    </Button>
                                <Button 
                                    flex={.5} 
                                    size={'md'} 
                                    colorScheme={'amber'} 
                                    variant={'ghost'}
                                    onPress={removeAll}
                                    leftIcon={<Ionicons name="remove-circle-outline" size={18} color="red" />}
                                    >
                                        Remove All
                                    </Button>
                            </View>
                        </View>
                    }
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    titleText: {
        color: "#1b1b1b",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "500",
        paddingLeft: 20,
        paddingTop: 10
    },
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
});

export default ViewCartScreen;