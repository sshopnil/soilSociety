import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image, Alert } from 'react-native';
import { NativeBaseProvider, VStack, Badge, FormControl, Input, Button, Checkbox, Radio } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../../../common/AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import { GLOBALKEYS } from "../../../../globalkeys";
import axios from "axios";


interface ItemInfo{
    data: any;
}

const ItemForm : React.FC<ItemInfo>= ({data}) => {

    // console.log(data);
    const [formData, setData] = React.useState(data);
    const [image, setImage] = useState("");

    const {email} = useAuth();
    const [cat, setCat] = useState(data.category+"");
    const navigator = useNavigation();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });


        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setData({
                ...formData,
                image: result.assets[0].uri
            })
        }
    };


    // axios.get(`${myIp4Addr}/users/`).then(Response=> console.log(Response.data));



    const onSubmit = () => {
        setData({...formData, category: cat});
        axios.put(`${GLOBALKEYS.myIp4Addr}/products/${data?.prod_id}`, formData)
        .then(Response=>{
            if(Response.data){
                Alert.alert('Product edit', 'Editted successfully!', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
                  setData({});
                setTimeout(() => {
                    navigator.goBack();
                  }, 1500);
            }
        })
        .catch(e=> {
            Alert.alert('Product add', 'Invalid form request!', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
              setData({});
        })
        
    };

    return <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired>

            <TouchableOpacity onPress={pickImage}>
                <Image style={{ marginTop: 10, height: 250, width: "80%", borderRadius: 10, alignSelf: 'center' }} source={{ uri: data?.image ? data?.image : "https://tinyurl.com/3pxz5xy2" }} />
            </TouchableOpacity>
            <FormControl.HelperText>
                Click on the blank image to upload an image of your product
            </FormControl.HelperText>
            <FormControl.Label _text={{ bold: true }} mt={10}>Item Name</FormControl.Label>
            <Input
                value={formData.name}
                inputMode='text'
                variant={'rounded'}
                placeholder="ex. Murgir Dim"
                onChangeText={(value) => setData({ ...formData, name: value })}
                borderRadius={10}
            />



            <FormControl.Label _text={{ bold: true }} mt={10}>Price</FormControl.Label>
            <Input
                value={formData.price+""}
                inputMode='numeric'
                variant={'rounded'}
                placeholder="How much for each of your product?"
                onChangeText={(value) => setData({ ...formData, price: value })}
                borderRadius={10}
            />


            <FormControl.Label _text={{ bold: true }} mt={10}>How many you have?</FormControl.Label>
            <Input
                value={formData.qty+""}
                inputMode='numeric'
                variant={'rounded'}
                onChangeText={(value) => setData({ ...formData, qty: value })}
                borderRadius={10}
            />



            <FormControl.Label _text={{ bold: true }} mt={5}>Description</FormControl.Label>
            <Input
                value={formData.desc}
                inputMode='text'
                type='text'
                variant={'rounded'}
                height={150}
                onChangeText={(value) => setData({ ...formData, desc: value })}
                borderRadius={10}
            />


            <FormControl.Label _text={{ bold: true }} mt={5}>
                Product Category
            </FormControl.Label>
            <VStack space={6} mt={2}>
                <Radio.Group
                    name="products-category"
                    accessibilityLabel="category"
                    value={cat}
                    onChange={(val) => {
                        setCat(val);
                        // setData({...formData, category: val})
                    }}

                >

                    <Radio value="1" my={1}>
                        Poultry 
                    </Radio>
                    <Radio value="2" my={1}>
                        Dairy
                    </Radio>
                    <Radio value="3" my={1}>
                        Foods and vegetables 
                    </Radio>
                </Radio.Group>
            </VStack>

        </FormControl>

        <Button onPress={onSubmit} variant={'subtle'} colorScheme={'emerald'} my={5}>Submit</Button>
    </VStack>;
};




const ItemEdit = () => {
    const parameters = useRoute().params;
    // console.log(parameters?.prod_id);
    const [data, setData] = useState();


    useEffect(()=>{
        axios.get(`${GLOBALKEYS.myIp4Addr}/products/${parameters?.prod_id}`)
        .then(Response=>{
            setData(Response.data);
        })
        .catch(e=> console.log(e));
    }, []);


    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <ScrollView style={{ height: 1000 }}>
                    <Text style={styles.titleStyle}>
                        Edit Item
                    </Text>
                    <View style={styles.innerView}>
                        {data && <ItemForm data={data}/>}
                    </View>
                </ScrollView>
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

export default ItemEdit;