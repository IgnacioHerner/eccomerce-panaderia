import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Product, Products} from '../screens';
import { COLORS } from "../constans/themes/colors";


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
            <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.backgroundDark,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                },
                headerTitleAlign: 'center',
                presentation: 'card',
            }}
            >
                <Stack.Screen 
                    name='Categories' 
                    component={Categories} 
                    options={{headerShown: false}}
                />
                <Stack.Screen name='Products' component={Products}/>
                <Stack.Screen name='Product' component={Product}/>
            </Stack.Navigator>
    )
}

export default ShopNavigator;