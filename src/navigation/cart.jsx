import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";
import { COLORS } from "../constans/themes/colors";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
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
            headerBackTitle: '',
        }}
        >
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;