import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons'
import { formatDate } from "../../utils/functions";
import { COLORS } from "../../constans/themes/colors";


const OrderItem = ({ item, onDelete }) => {
    return(
        <View style={styles.container}>  
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>${item.total}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons
                        name="trash"
                        size={24}
                        color={COLORS.text}
                        />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItem