import React from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text} from 'react-native';
import { NativeBaseProvider, VStack, Badge} from "native-base";



const PostItem = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
                <Text style={styles.titleStyle}>
                    Post an item
                </Text>
                <View style={styles.innerView}>                  
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

export default PostItem;