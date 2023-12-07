import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import { GLOBALKEYS } from "../../../globalkeys";
import axios from "axios";
import { useAuth } from "../../common/AuthContext";
const results = [
    { "price": 30, "prod_id": 1, "rem_item": 50, "rating": 4.9, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur massa in nunc sodales aliquet quis nec ligula. Curabitur vel nibh vel ipsum aliquet rutrum non quis tortor. Suspendisse pulvinar est vitae enim tincidunt lacinia in auctor nisi. Mauris sagittis tempor sapien, vel scelerisque risus eleifend nec. Aliquam sollicitudin enim quis eros mollis posuere. Maecenas vel purus a odio molestie ultrices sodales quis quam. Phasellus vel odio a erat posuere vehicula non sit amet dui. Donec vel massa lorem. Mauris ac mattis felis. Ut dictum libero interdum turpis lacinia, nec lobortis arcu sagittis. Cras faucibus, neque eget sagittis vulputate, lacus lorem commodo turpis, ut volutpat nulla est ut eros." },
    { "price": 40, "prod_id": 2, "rem_item": 48, "rating": 4.5, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur massa in nunc sodales aliquet quis nec ligula. Curabitur vel nibh vel ipsum aliquet rutrum non quis tortor. Suspendisse pulvinar est vitae enim tincidunt lacinia in auctor nisi. Mauris sagittis tempor sapien, vel scelerisque risus eleifend nec. Aliquam sollicitudin enim quis eros mollis posuere. Maecenas vel purus a odio molestie ultrices sodales quis quam. Phasellus vel odio a erat posuere vehicula non sit amet dui. Donec vel massa lorem. Mauris ac mattis felis. Ut dictum libero interdum turpis lacinia, nec lobortis arcu sagittis. Cras faucibus, neque eget sagittis vulputate, lacus lorem commodo turpis, ut volutpat nulla est ut eros." },
    { "price": 100, "prod_id": 3, "rem_item": 88, "rating": 3.9, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur massa in nunc sodales aliquet quis nec ligula. Curabitur vel nibh vel ipsum aliquet rutrum non quis tortor. Suspendisse pulvinar est vitae enim tincidunt lacinia in auctor nisi. Mauris sagittis tempor sapien, vel scelerisque risus eleifend nec. Aliquam sollicitudin enim quis eros mollis posuere. Maecenas vel purus a odio molestie ultrices sodales quis quam. Phasellus vel odio a erat posuere vehicula non sit amet dui. Donec vel massa lorem. Mauris ac mattis felis. Ut dictum libero interdum turpis lacinia, nec lobortis arcu sagittis. Cras faucibus, neque eget sagittis vulputate, lacus lorem commodo turpis, ut volutpat nulla est ut eros." }
];


const FreshEatsScreen = () => {


    const { email } = useAuth();
    const [term, seTerm] = useState('');
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`${GLOBALKEYS.myIp4Addr}/products`).then(Response => {
            setData(Response.data);
        })
            .catch(e => console.log(e + "could not get any product"));
    }, [])

    const filterResultsByCat = (category: number) => {
        //price === 1(poultry) || 2(dairy) || 3(veg)
        return data?.filter(result => {
            return result?.category === category;
        });
    }

    // console.log(filterResultsByCat(1));
    return (
        <View style={{ backgroundColor: '#1B1B1B', height: "100%" }}>
            <Text style={styles.titleStyle}>FreshEats</Text>
            <View style={styles.viewStyle}>
                <SearchBar term={term} onTermChange={seTerm} />
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        {data ? <>
                            <ResultsList
                                results={filterResultsByCat(1)}
                                title="Poultry"
                            />
                            <ResultsList
                                results={filterResultsByCat(2)}
                                title="Dairy"
                            />
                            <ResultsList
                                results={filterResultsByCat(3)}
                                title="Foods and vegetables"
                            />
                        </>
                            :
                            <Text style={styles.titleStyle2}>No Items Found</Text>
                        }
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10
    },
    titleStyle: {
        paddingTop: 42,
        backgroundColor: '#1B1B1B',
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20,
        paddingVertical: 20,
    },
    viewStyle: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        height: '100%',
        marginHorizontal: 5
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 100
    },
    scrollView: {
        marginHorizontal: 20,
    },
});

export default FreshEatsScreen;