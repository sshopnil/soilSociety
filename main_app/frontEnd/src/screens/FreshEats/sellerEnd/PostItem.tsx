import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { NativeBaseProvider, VStack, Badge, FormControl, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../common/AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';


function ItemForm() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const navigation = useNavigation();
    const [image, setImage] = useState("");

    const { emailSet, setLogin } = useAuth();

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


    const validate = () => {
        if (formData.email === undefined) {
            setErrors({
                ...errors,
                email: 'Email is required'
            });
            return false;
        } else if (formData.email.length < 5) {
            setErrors({
                ...errors,
                email: 'Invalid Email'
            });
            return false;
        }
        else if (formData.password === undefined) {
            setErrors({
                ...errors,
                pass: 'Password is required'
            });
        }

        return true;
    };

    // axios.get(`${myIp4Addr}/users/`).then(Response=> console.log(Response.data));



    const onSubmit = () => {
        console.log(formData);

        // console.log(formData);
    };

    return <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={'email' in errors || 'pass' in errors}>

            <TouchableOpacity onPress={pickImage}>
                <Image style={{ marginTop: 10, height: 250, width: "80%", borderRadius: 10, alignSelf: 'center' }} source={{ uri: image ? image : "https://tinyurl.com/3pxz5xy2" }} />
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
                value={formData.price}
                inputMode='numeric'
                variant={'rounded'}
                placeholder="How much for each of your product?"
                onChangeText={(value) => setData({ ...formData, price: value })}
                borderRadius={10}
            />


            <FormControl.Label _text={{ bold: true }} mt={10}>How many you have?</FormControl.Label>
            <Input
                value={formData.qty}
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

            {'pass' || 'email' in errors ? <FormControl.ErrorMessage>Invalid password or email</FormControl.ErrorMessage> : <FormControl.HelperText>
                Your password
            </FormControl.HelperText>}

        </FormControl>

        <Button variant={'subtle'} colorScheme={'emerald'} my={5}>Post</Button>
    </VStack>;
};





const PostItem = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <ScrollView style={{ height: 1000 }}>
                    <Text style={styles.titleStyle}>
                        Post an item
                    </Text>
                    <View style={styles.innerView}>
                        <ItemForm />
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

export default PostItem;