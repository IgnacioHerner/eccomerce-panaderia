import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryItem } from "../../components";
import { CATEGORIES } from '../../constans/data/index'
import { COLORS } from "../../constans/themes/colors";
import { styles } from "./styles";

const Categories = ({ navigation}) => {
    const onSelected = (item) => {
        console.warn('onSelected', item)
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    )
}

export default Categories;