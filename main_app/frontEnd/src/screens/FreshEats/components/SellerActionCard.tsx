import { Badge, VStack } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface cardInfo {
    title: string,
    notify: number
}



const SellerActionCard: React.FC<cardInfo> = ({ title, notify }) => {
    return (
        <TouchableOpacity style={[styles.boxStyle, styles.shadowProp]}>
                <VStack>
                    {notify != 0 && <Badge // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                            fontSize: 12
                        }}>
                        {notify}
                    </Badge>}
                    <Text style={{fontSize: 18, padding: 10}}>{title}</Text>
                </VStack>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        width: '80%'
    },
    shadowProp: {
        elevation: 5
    },
    sellerBtns: {
        padding: 10,
        width: "100%",
        height: 50
    },
});

export default SellerActionCard;