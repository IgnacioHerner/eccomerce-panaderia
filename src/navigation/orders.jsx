import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import { COLORS } from "../constans/themes/colors";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Order"
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
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrderNavigator;