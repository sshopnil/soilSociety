import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Button} from "native-base";
import { Fontisto } from '@expo/vector-icons';
import { useShoppingCart } from "../providers/CartContext";

interface CartInfo{
    id: number,
    img_src: string,
    title: string,
    price: number,
    qty: number
}

export const ItemCard : React.FC<CartInfo>= ({id, img_src, title, price, qty}) =>{
    const {removeFromCart} = useShoppingCart();

    return (
            <View style={[styles.boxStyle, styles.shadowProp]}>
                    <Image source={{uri: img_src}}  style={styles.imageStyle}/>
                    <Text>{title}</Text>
                    <Text>{price}৳ <Text style={{fontSize: 10}}>x{qty}</Text></Text>
                    <Button 
                        variant={'subtle'} 
                        colorScheme={'rose'}
                        rightIcon={<Fontisto name="shopping-basket-remove" size={14} color="brown" />}
                        onPress={()=> removeFromCart(id)}
                    >
                        Remove
                    </Button>
                </View>
    );
};

const styles = StyleSheet.create({
    boxStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10
    },
    shadowProp: {
        elevation: 5
    },
    imageStyle: {
        height: "100%",
        width: "15%",
        borderRadius: 10,
        alignSelf: 'center'
    },
})