import React from "react";
import { View, Text, StyleSheet, Image, Alert} from "react-native";
import { Button} from "native-base";
import { Fontisto } from '@expo/vector-icons';
import { useShoppingCart } from "../providers/CartContext";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { GLOBALKEYS } from '../../../../globalkeys';
import { useNavigation } from "@react-navigation/native";


interface CartInfo{
    id: number,
    img_src: string,
    title: string,
    price: number,
    qty: number
}

export const MyItemCard : React.FC<CartInfo>= ({id, img_src, title, price, qty}) =>{
    const navigation = useNavigation();


    const handleRemove = () =>{
        axios.delete(`${GLOBALKEYS.myIp4Addr}/products/${id}`)
        .then(Response=> {
            Alert.alert('Product delete', 'Deleted successfully', [
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


    const handleEdit = ()=>{
        navigation.navigate('edit-item', {prod_id: id});
    }
    
    return (
            <View style={[styles.boxStyle, styles.shadowProp]}>
                    <Image source={{uri: img_src}}  style={styles.imageStyle}/>
                    <Text>{title}</Text>
                    <Button 
                        variant={'subtle'} 
                        colorScheme={'coolGray'}
                        rightIcon={<AntDesign name="edit" size={14} color="gray" />}
                        onPress={handleEdit}
                    >
                        Edit
                    </Button>
                    <Button 
                        onPress={handleRemove}
                        variant={'subtle'} 
                        colorScheme={'rose'}
                        rightIcon={<Ionicons name="ios-remove-circle-outline" size={14} color="brown" />}
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
        padding: 10,
    },
    shadowProp: {
        elevation: 5
    },
    imageStyle: {
        height: "100%",
        width: "15%",
        borderRadius: 10,
        alignSelf: 'center',
    },
})