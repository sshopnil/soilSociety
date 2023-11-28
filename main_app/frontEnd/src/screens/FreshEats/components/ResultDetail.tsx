import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';


interface propTypes{
    results: Array<Object>
};


const ResultDetail : React.FC<propTypes> = ({results}) => {
    return (
        <View style={[styles.cardStyle, styles.shadowProp]}>

            <View style={styles.priceStyle}>
                <Text style={styles.priceText}>$30</Text>
            </View>

            <Image 
                style={styles.imageStyle} 
                source={{ uri: results.img_src}} 
            />
            <Text style={styles.titleStyle}>{results.name}</Text>
            <Entypo name="shopping-cart" size={24} color="black" style={styles.cartIcon} onPress={()=> console.log("added to cart")}/>
            <TouchableOpacity style={styles.buyNowBtn}>
                <Text style={{color: "#DDFF54", textAlign:"center"}}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    cardStyle: {
        height: 210,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    buyNowBtn: {
        bottom: 15,
        backgroundColor: '#1B1B1B',
        width: 80,
        alignSelf: 'flex-end',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
    imageStyle: {
        width: "100%",
        borderRadius: 5,
        height: 120,
        marginBottom: 5,
        alignSelf: 'center'
    },
    shadowProp: {
        elevation: 5
    },
    priceStyle: {
        backgroundColor: 'green',
        borderRadius: 50,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-start'
    },
    priceText: {
        color: 'white',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20
    },
    cartIcon:{
        top: 15,
        paddingStart: 8,
        alignSelf: 'flex-start'
    },
    titleStyle:{
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: 'bold'
    }
});


export default ResultDetail;