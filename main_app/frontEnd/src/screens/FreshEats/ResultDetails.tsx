import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Alert } from "react-native";
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Button, Icon, NativeBaseProvider, Box, Center, Text, IconButton, FormControl, Slider, VStack, WarningOutlineIcon } from "native-base";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { CartItem } from "./providers/CartContext";
import { useShoppingCart } from "./providers/CartContext";
import axios from "axios";
import { GLOBALKEYS } from "../../../globalkeys";


const ResultDetails: React.FC<{ item: CartItem }> = ({ item }) => {
    const [rating, setRating] = useState(0);
    const parameters = useRoute().params;
    const navigation = useNavigation();
    const [thisItem, setThisItem] = useState();
    useEffect(() => {
        axios.get(`${GLOBALKEYS.myIp4Addr}/products/${parameters.id}`).then(Response => {
            setThisItem(Response.data);
        })
            .catch(e => console.log(e + "could not get any product"));
    }, [])
    const [Oqty, setOqty] = useState(1);
    const { addToCart, cart, removeFromCart } = useShoppingCart();


    const handleIncrease = () => {
        setOqty(Oqty + 1);
    }
    const handleDecrease = () => {
        setOqty(Oqty - 1);
    }



    // useEffect(()=> {
    //     console.log(cart);
    //     console.log(cart.find(item => item.id == thisItem?.prod_id) === undefined);
    // },[]);


    const handleCartBtn = () => {
        // setCart(true);
        const item = {
            id: thisItem?.prod_id,
            name: thisItem?.name,
            price: thisItem?.price,
            qty: Oqty,
            img_src: thisItem?.img_src
        }
        addToCart(item);
    }

    const handleRemoveCartBtn = () => {
        removeFromCart(thisItem?.prod_id);
    }

    const handleSubmit = ()=>{
        axios.put(`${GLOBALKEYS.myIp4Addr}/products/${thisItem?.prod_id}`, {rating: rating})
        .then(()=>{
            Alert.alert('Success', 'Thank you for your feedback!', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        })
        .catch(e=> console.log(e));
    }
    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: '#1B1B1B', height: "100%" }}>
                <Text style={styles.titleStyle}>Product Details</Text>
                <View style={styles.viewStyle}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={styles.imageViewStyle}>
                                <Image style={styles.imageStyle} source={{ uri: thisItem?.image }} />
                            </View>
                            <Text style={styles.priceText}>{thisItem?.price}৳</Text>
                            <Box flexDirection={'row'}>
                                <Text style={styles.itemTitle} flex={.5}>{thisItem?.name}</Text>
                                <Button
                                    leftIcon={<Icon as={AntDesign} name="eye" size="sm" />}
                                    style={{ flex: .5 }}
                                    variant={'outline'}
                                    colorScheme={'blueGray'}
                                    size={'sm'}
                                    flex={.5}
                                    marginX={6}
                                    alignSelf={'center'}
                                    justifyContent={'center'}
                                    onPress={() => console.log('added watchlist')}
                                >
                                    ADD TO WATCHLIST
                                </Button>
                            </Box>
                            <View style={styles.MainInfo}>
                                <Text style={styles.itemTitle}>Ratings</Text>
                                <StarRatingDisplay rating={thisItem?.rating === undefined ? 0.0 : thisItem?.rating} style={styles.ratingStar} />
                            </View>
                            <Text style={{ marginHorizontal: 20, fontSize: 16, alignSelf: 'flex-end' }}>Items Available: {thisItem?.qty}</Text>

                            <View style={styles.descBox}>
                                <Text style={styles.descrTitle}>Description: </Text>
                                <Text>{thisItem?.desc}</Text>
                            </View>

                            <Box justifyContent={'center'} flexDirection={'row'} my={10}>
                                <Text style={{ fontSize: 16, alignSelf: 'center' }}>QTY: </Text>
                                {/* increase btn  */}
                                <IconButton icon={<Icon as={Entypo} name="minus" />} size={'sm'} isDisabled={Oqty == 0 ? true : false} onPress={handleDecrease} />
                                <Text style={{ fontSize: 16, alignSelf: 'center' }}>{Oqty}</Text>
                                <IconButton icon={<Icon as={Entypo} name="plus" />} size={'sm'} isDisabled={thisItem?.rem_item == Oqty ? true : false} onPress={handleIncrease} />
                                {/* increase btn  */}
                            </Box>
                            <View style={styles.MainInfo}>
                                {thisItem?.qty >= Oqty
                                    ?
                                    <>
                                        <Button
                                            leftIcon={<Icon as={Entypo} name="shopping-bag" size="sm" />}
                                            style={{ flex: .5 }}
                                            variant={'outline'}
                                            colorScheme={'blueGray'}
                                            onPress={() => navigation.navigate('order-item', { name: thisItem?.name, price: thisItem?.price, qty: Oqty, id: thisItem?.prod_id })}
                                        >
                                            Buy Now
                                        </Button>
                                        {cart.find(item => item.id == thisItem?.prod_id) !== undefined
                                            ? <Button
                                                leftIcon={<Icon as={Entypo} name="shopping-cart" size="sm" />}
                                                style={{ flex: .5 }}
                                                variant={'ghost'}
                                                colorScheme={'danger'}
                                                onPress={handleRemoveCartBtn}
                                            >
                                                Remove From Cart
                                            </Button>

                                            : <Button
                                                leftIcon={<Icon as={Entypo} name="shopping-cart" size="sm" />}
                                                style={{ flex: .5 }}
                                                variant={'outline'}
                                                colorScheme={'amber'}
                                                onPress={handleCartBtn}

                                            >
                                                Add to cart
                                            </Button>
                                        }
                                    </>
                                    :
                                    <Button
                                        leftIcon={<Icon as={Entypo} name="shopping-bag" size="sm" />}
                                        style={{ flex: 1 }}
                                        variant={'outline'}
                                        colorScheme={'blueGray'}
                                        isDisabled
                                    >
                                        Out Of Stock
                                    </Button>
                                }

                            </View>
                            <VStack space={4} w="100%" p={50} alignItems={'center'}>
                                <FormControl>
                                    <FormControl.Label fontSize={16}>Rate the product</FormControl.Label>
                                    <StarRatingDisplay rating={rating} style={[styles.ratingStar, {alignSelf:'center'}]} />
                                    <Slider 
                                        defaultValue={rating} 
                                        maxValue={5} 
                                        minValue={0} 
                                        onChange={(value) => setRating(value)}
                                        width={250}
                                        colorScheme={'pink'}
                                        my={10}
                                        >
                                        <Slider.Track>
                                            <Slider.FilledTrack />
                                        </Slider.Track>
                                        <Slider.Thumb />
                                    </Slider>
                                <Button variant={'subtle'} colorScheme={'coolGray'} onPress={handleSubmit}>Submit</Button>
                                </FormControl>
                            </VStack>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    ratingStar: {
        marginTop: 5,
        marginEnd: 50,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 100
    },
    descBox: {
        padding: 20,
        marginLeft: 10,
    },
    descrTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    WatchList: {
        marginTop: 10,
        marginEnd: 10,
        alignItems: 'center',
    },
    itemTitle: {
        color: 'black',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        flex: 1
    },
    MainInfo: {
        flexDirection: "row",
    },
    priceText: {
        top: 20,
        left: 10,
        borderRadius: 15,
        backgroundColor: '#E0FFB4',
        color: 'black',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        position: 'absolute'
    },
    titleStyle: {
        paddingTop: 56,
        backgroundColor: '#1B1B1B',
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20,
        paddingVertical: 20
    },
    imageStyle: {
        width: "100%",
        height: 400,
        borderRadius: 10
    },
    listStyle: {
        margin: 10
    },
    viewStyle: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        height: '100%',
        marginHorizontal: 5,
    },
    imageViewStyle: {
        padding: 10,
        top: 0,
        bottom: 0
    }
});

export default ResultDetails;