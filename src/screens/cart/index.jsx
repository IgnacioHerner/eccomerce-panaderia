import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { CartItem } from '../../components'
import { CART } from '../../constans/data'
import { styles } from "./styles";

const Cart = ({navigation}) => {


    const total = 1400;

    const onDelete = (id) => {
        console.warn('Delete', id)
    }

    const keyExtractor = (item) => item.id.toString();

    const renderItem = ({ item }) => (
        <CartItem item={item} onDelete={() => {}}/>
    )
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={CART}
                    renderItem={renderItem}
                    style={styles.listContainer}
                    keyExtractor={keyExtractor}
                /> 
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={() => nul}>
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.titleTotal}>Total</Text>
                        <Text style={styles.textTotal}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;