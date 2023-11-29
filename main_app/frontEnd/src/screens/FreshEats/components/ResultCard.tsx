import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";


interface propTypes{
    results: Array<Object>
};


const ResultCard : React.FC<propTypes> = ({results}) => {
    return (
        <View style={[styles.cardStyle, styles.shadowProp]}>

            <View style={styles.priceStyle}>
                <Text style={styles.priceText}>{results.price}৳</Text>
            </View>

            <Image 
                style={styles.imageStyle} 
                source={{ uri: results.img_src}} 
            />
            <Text style={styles.titleStyle}>{results.name}</Text>
            <Text style={styles.inStockTxt}>In stock: {results.rem_item}</Text>
            <Text style={styles.ratingTxt}>Rating: {results.rating}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    cardStyle: {
        height: 150,
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    inStockTxt: {
        fontSize: 10,
        alignSelf: 'flex-start'
    },
    ratingTxt:{
        fontSize: 10,
        alignSelf: 'flex-start'
    },
    imageStyle: {
        width: "100%",
        borderRadius: 5,
        height: 80,
        marginBottom: 5,
        alignSelf: 'center'
    },
    shadowProp: {
        elevation: 5
    },
    priceStyle: {
        backgroundColor: '#E0FFB4',
        borderRadius: 50,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-start'
    },
    priceText: {
        color: 'black',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
    cartIcon:{
        top: 15,
        paddingStart: 8,
        alignSelf: 'flex-start'
    },
    titleStyle:{
        alignSelf: 'flex-start',
        fontSize: 16,
    }
});


export default ResultCard;