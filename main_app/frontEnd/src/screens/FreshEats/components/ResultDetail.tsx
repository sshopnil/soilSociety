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
            <Text style={styles.inStockTxt}>In stock: {results.rem_item}</Text>
            <Text style={styles.ratingTxt}>Rating: {results.rating}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    cardStyle: {
        height: 210,
        width: 160,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    inStockTxt: {
        fontSize: 12,
        alignSelf: 'flex-start'
    },
    ratingTxt:{
        fontSize: 12,
        alignSelf: 'flex-start'
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
        fontSize: 18
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


export default ResultDetail;