import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { VStack, FormControl, Input, Button, NativeBaseProvider } from "native-base";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import { GLOBALKEYS } from "../../../globalkeys";
import { useNavigation} from "@react-navigation/native";



function RegisterForm() {
    const [formData, setData] = React.useState({user_role:"general"});
    const [errors, setErrors] = React.useState({});
    const [image, setImage] = useState("");
    const navigation = useNavigation();



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
        if (formData.name === undefined) {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            return false;
        } else if (formData.name.length < 3) {
            setErrors({
                ...errors,
                name: 'Invalid Name'
            });
            return false;
        }
        else if (formData.email === undefined) {
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
        else if (formData.password.length < 4) {
            setErrors({
                ...errors,
                pass: 'Password must be of length 4'
            });
        }

        return true;
    };

    const onSubmit = () => {
        // validate() ? console.log('Submitted') : console.log('Validation Failed');
        console.log(formData);
        // validate();
        validate()
            ? axios.post(`${GLOBALKEYS.myIp4Addr}/users/signup`, formData).then(Response => {
                if (Response.data.email) {
                    // storeData('user', formData.email);
                    console.log('success');
                    setErrors({});
                    Alert.alert('Success!', 'Registration successful', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ]);
                    setTimeout(() => {
                        navigator.navigate('login');
                      }, 1500);
                }
            }).catch(e=> {
                console.log('Wrong Info Provided');
                Alert.alert('Error', 'Email already exists', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
                setData({user_role:"general"});
            })
            : setData({user_role:"general"}), setImage("");
    };

    return <VStack width="90%" mx="3" maxW="300px" my={10}>
        <FormControl isInvalid={'email' in errors || 'pass' in errors || 'name' in errors}>
            <FormControl.Label _text={{ bold: true }} isRequired>Username</FormControl.Label>
            <Input
                value={formData.name}
                isRequired={true}
                inputMode='text'
                variant={'underlined'}
                placeholder="ex. Usama Bin"
                onChangeText={(value) => setData({ ...formData, name: value })}
                borderRadius={10}
            />

            {'name' in errors ? <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>
                Name must contain at least 3 letters
            </FormControl.HelperText>}

            <FormControl.Label _text={{ bold: true }} mt={10} isRequired>Email</FormControl.Label>
            <Input
                value={formData.email}
                isRequired={true}
                inputMode='email'
                variant={'underlined'}
                placeholder="ex. dev@ymail.com"
                onChangeText={(value) => setData({ ...formData, email: value })}
                borderRadius={10}
            />

            {'email' in errors ? <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> : <FormControl.HelperText>
                Enter your email
            </FormControl.HelperText>}



            <FormControl.Label _text={{ bold: true }} mt={10} isRequired>Password</FormControl.Label>
            <Input
                value={formData.password}
                isRequired={true}
                inputMode='text'
                type='password'
                variant={'underlined'}
                onChangeText={(value) => setData({ ...formData, password: value })}
                borderRadius={10}
            />
            {'pass' in errors ? <FormControl.ErrorMessage>{errors.pass}</FormControl.ErrorMessage> : <FormControl.HelperText>
                password length must be upto 4
            </FormControl.HelperText>}


            <FormControl.Label _text={{ bold: true }} mt={10} mb={10}>Profile Image(Optional)</FormControl.Label>

            {/* <TouchableOpacity
                style={{ padding: 10 }}
                onPress={pickImage}
            >
                <Text style={{ padding: 10 }}>Upload</Text>
            </TouchableOpacity> */}

            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={pickImage}>
                    <Image style={{ height: 120, width: 120, borderRadius: 75, alignSelf: 'center' }} source={{ uri: image ? image : "https://tinyurl.com/hkcbwn5s" }} />
                </TouchableOpacity>
            </View>

        </FormControl>

        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
            Submit
        </Button>
    </VStack>;
};




const RegisterScreen = () => {
    return (
        <NativeBaseProvider>
            <View style={{ alignItems: 'center' }}>
                <RegisterForm />
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({

});

export default RegisterScreen;