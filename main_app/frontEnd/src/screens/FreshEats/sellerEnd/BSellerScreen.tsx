import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { VStack, FormControl, Input, Button, NativeBaseProvider, Select, CheckIcon, Checkbox } from "native-base";
import { useAuth } from "../../../common/AuthContext";
import axios from "axios";
import { GLOBALKEYS } from "../../../../globalkeys";
import { useNavigation } from "@react-navigation/native";


function SellerForm() {
    const {email, setSeller} = useAuth();
    const navigator = useNavigation();
    const [formData, setData] = React.useState({});
    const [isLocationSelected, setLocation] = useState(false);
    const checkboxes = [
        { name: 'poultry', label: 'Poultry', checked: false },
        { name: 'dairy', label: 'Dairy', checked: false },
        { name: 'veg', label: 'Foods and Vegetable', checked: false },
        // Add more checkboxes as needed
    ];
// {
//   "shop_name": "Murads shop",
//   "address": "address*",
//   "house": "home addr*",
//   "thana": "thana",
//   "division": "division*",
//   "category": "An array of caategories"
// }

    const onSubmit = async() => {
        // validate() ? console.log('Submitted') : console.log('Validation Failed');
        const address = formData?.house + ", " + formData?.thana + ", " + formData?.division;

        await Promise.all([
            axios.post(`${GLOBALKEYS.myIp4Addr}/seller/add`, {
                ...formData, 
                address,
                email
            }).then(Response => {
                if(Response.data){
                    setData({});
                    Alert.alert('Success', 'Congratulations! Now you can sell items', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ]);
                      setTimeout(() => {
                        navigator.goBack();
                      }, 1500);
                      setSeller();
                }
            })
                .catch(e => console.log(e + "Invalid form")),

            axios.put(`${GLOBALKEYS.myIp4Addr}/users/update/${email}`)
            .then(()=> console.log('changed status'))
            .catch((e)=> console.log(e))
        ])
        ;
        // console.log(formData, address);


    };

    return <VStack width="90%" mx="3" maxW="300px" my={10}>
        <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Shop Name</FormControl.Label>
            <Input
                value={formData?.shop_name}
                placeholder="ex. Jalal Agro"
                onChangeText={(value) => setData({ ...formData, shop_name: value })}
                borderRadius={10}
            />

            <FormControl.Label _text={{ bold: true }} mt={5}>
                Shop Location
            </FormControl.Label>
            <Select
                selectedValue={formData.division}
                minWidth="200"
                accessibilityLabel="division"
                placeholder="Choose Division"
                _selectedItem={{
                    bg: "teal.200",
                    endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => {
                    setData({ ...formData, division: itemValue });
                    setLocation(true);
                }}
                borderRadius={10}
            >
                <Select.Item label="Dhaka" value="dh" />
                <Select.Item label="Chittagong" value="ch" />
                <Select.Item label="Sylhet" value="sy" />
                <Select.Item label="Rajshahi" value="ra" />
                <Select.Item label="Khulna" value="kh" />
            </Select>

            {isLocationSelected && (
                <>
                    <FormControl.Label _text={{ bold: true }} mt={5}>
                        Police Station
                    </FormControl.Label>
                    <Input
                        value={formData?.thana}
                        placeholder="ex. Tejgaon"
                        onChangeText={(value) => setData({ ...formData, thana: value })}
                        borderRadius={10}
                    />

                    <FormControl.Label _text={{ bold: true }} mt={5}>
                        House, Road No. & Area
                    </FormControl.Label>
                    <Input
                        value={formData?.house}
                        placeholder="246/..., Namapara"
                        onChangeText={(value) => setData({ ...formData, house: value })}
                        borderRadius={10}
                    />
                    <FormControl.Label _text={{ bold: true }} mt={5}>
                        Phone
                    </FormControl.Label>
                    <Input
                        value={formData?.phone}
                        placeholder="+8801"
                        onChangeText={(value) => setData({ ...formData, phone: value })}
                        borderRadius={10}
                    />
                </>
            )}

            <FormControl.Label _text={{ bold: true }} mt={5}>
                Product Category
            </FormControl.Label>
            <VStack space={6} mt={2}>
                {checkboxes.map((item) => (
                    <Checkbox
                        key={item.name}
                        value={item.name}
                        onChange={() => {
                            setData((prevData) => ({
                                ...prevData,
                                category: prevData.category ? [...prevData.category, item.name] : [item.name],
                            }));
                        }}
                    >
                        {item.label}
                    </Checkbox>
                ))}
            </VStack>
        </FormControl>

        <Button onPress={onSubmit} mt="5" colorScheme="cyan" isDisabled={isLocationSelected ? false : true}>
            Submit
        </Button>
    </VStack>;
};




const BSellerScreen = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <Text style={styles.titleStyle}>
                    Become a seller
                </Text>
                <View style={styles.innerView}>
                    <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 20, color: '#1b1b1b' }}>Seller Form</Text>
                    <SellerForm />
                </View>
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

export default BSellerScreen;