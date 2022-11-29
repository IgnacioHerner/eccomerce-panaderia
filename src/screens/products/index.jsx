import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constans/themes/colors";
import { styles } from "./styles";

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <Button 
                title="Go to Product"
                color={colors.primaryDark}
                onPress={() => navigation.navigate('Product')}
            />
        </View>
    )
}

export default Products;