import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { CommonActions, useNavigation } from "@react-navigation/native";
import { VStack, FormControl, Input, Button, NativeBaseProvider } from "native-base";
import axios from "axios";
import { GLOBALKEYS, CurrUser } from '../../../globalkeys';
import { getData, storeData } from "../FreshEats/AsyncStorageUtils";
import { useAuth } from "../../common/AuthContext";

function LoginForm() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const navigation = useNavigation();
    const {emailSet, setLogin} = useAuth();


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
        else if(formData.password === undefined){
            setErrors({
                ...errors,
                pass: 'Password is required'
            });
        }

        return true;
    };

    // axios.get(`${myIp4Addr}/users/`).then(Response=> console.log(Response.data));



    const onSubmit = () => {
        // console.log(formData);
        // axios.get(`${GLOBALKEYS.myIp4Addr}/users/`).then(Response=> console.log(Response.data))
        validate()
            ? axios.post(`${GLOBALKEYS.myIp4Addr}/users/login`, formData).then(Response => {
                console.log(Response.data);
                if (Response.data.token === "ok") {
                    // storeData('user', formData.email);
                    console.log('success');
                    setErrors({})
                    // navigation.dispatch(
                    //     CommonActions.reset({
                    //              index: 0,
                    //              routes: [{ name: 'home'}],
                    //         })
                    //      );
                    setLogin();
                    emailSet(formData.email);
                    navigation.navigate('home');
                }
            }).catch(e=> {
                console.log(e);
                setErrors({ ...errors, pass: "invalid password" });
                setData({});
            })
            : console.log('Validation Failed');
        // console.log(formData);
    };

    return <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={'email' in errors || 'pass' in errors}>

            <FormControl.Label _text={{ bold: true }} mt={10}>Email</FormControl.Label>
            <Input
                value={formData.email}
                inputMode='email'
                variant={'underlined'}
                placeholder="ex. dev@ymail.com"
                onChangeText={(value) => setData({ ...formData, email: value })}
                borderRadius={10}
            />



            <FormControl.Label _text={{ bold: true }} mt={5}>Password</FormControl.Label>
            <Input
                value={formData.password}
                inputMode='text'
                type='password'
                variant={'underlined'}
                onChangeText={(value) => setData({ ...formData, password: value })}
                borderRadius={10}
            />

            {'pass' || 'email' in errors ? <FormControl.ErrorMessage>Invalid password or email</FormControl.ErrorMessage> : <FormControl.HelperText>
                Your password
            </FormControl.HelperText>}

        </FormControl>

        <TouchableOpacity style={styles.buttonStyle} onPress={onSubmit}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </VStack>;
};



const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text style={styles.textStyle}> Login </Text>
                <LoginForm />

                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.forgotpassStyle} onPress={() => navigation.navigate('forgotpass')}>
                        <Text style={styles.forgotpassTxt}>Forgot password? click here..</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.regStyle} onPress={() => navigation.navigate('register')}>
                        <Text style={styles.forgotpassTxt}>Or, Register Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "white",
        height: '100%',
        paddingVertical: 50
    },
    textStyle: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center'
    },
    textInputStyle: {
        padding: 10,
        height: 50,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#E0FFB4',
        color: 'black',
        alignSelf: 'center',
        marginVertical: 10
    },
    buttonStyle: {
        backgroundColor: 'black',
        textAlign: "center",
        paddingHorizontal: 40,
        paddingVertical: 10,
        fontWeight: "700",
        borderRadius: 10,
        marginTop: 40
    },
    buttonText: {
        textTransform: 'uppercase',
        color: "#D8E9A8",
        fontWeight: '700',
        textAlign: 'center'
    },
    forgotpassStyle: {
        alignSelf: 'center',
        paddingTop: 20
    },
    forgotpassTxt: {
        color: '#00a2fa',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    regStyle: {
        alignSelf: 'center',
        paddingTop: 10,
        textAlign: 'center'
    },
});

export default LoginScreen;