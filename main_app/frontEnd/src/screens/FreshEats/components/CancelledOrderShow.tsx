import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import OrderTable from "./OrderTable";


interface info{
    orderInfo: any;
}

const CancelledOrderShow : React.FC<info>= ({orderInfo}) =>{
    const [sellerInfo, setSellerInfo] = useState(null);
    return(
        <View>
            <OrderTable data={orderInfo} orderID={setSellerInfo}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CancelledOrderShow;