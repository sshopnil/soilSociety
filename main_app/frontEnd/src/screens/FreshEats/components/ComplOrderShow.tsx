import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import OrderTable from "./OrderTable";
import SelectDropdown from 'react-native-select-dropdown';
interface info {
    orderInfo: any;
}

const ColabelplOrderShow: React.FC<info> = ({ orderInfo }) => {
    const [sellerInfo, setSellerInfo] = useState(null);
    const [selectedM, setSelectedM] = useState(null);
    // console.log(orderInfo);
    // const months = [{ value: 1, label: 'Jan' }, { value: 2, label: 'Feb' }, { value: 3, label: 'Mar' }, { value: 4, label: 'Apr' }, { value: 5, label: 'May' }, { value: 6, label: 'Jun' }, { value: 7, label: 'Jul' }, { value: 8, label: 'Aug' }, { value: 9, label: 'Sept' }, { value: 10, label: 'Oct' }, { value: 11, label: 'Nov' }, { value: 12, label: 'Dec' }];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


    const filteredInf = orderInfo.filter((item)=> item.status === 'completed' && selectedM == item.del_date.split('-')[1]);



    // console.log(filteredInf);
    return (
        <View style={{alignItems:'center'}}>
            <SelectDropdown
                defaultButtonText="Select a month"
                buttonStyle={{backgroundColor: 'black'}}
                buttonTextStyle={{color: 'white'}}
                data={months}
                onSelect={(selectedItem, index) => {
                    setSelectedM(index+1);
                    // console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            {selectedM && <OrderTable data={filteredInf} setOrderID={setSellerInfo} />}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ColabelplOrderShow;