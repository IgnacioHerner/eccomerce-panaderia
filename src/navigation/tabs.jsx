import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop';
import CartNavigator from './cart';
import OrderNavigator from './orders'
import { Ionicons }from '@expo/vector-icons'
import { COLORS } from "../constans/themes/colors";
import { isAndroid } from "../utils";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <BottomTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
            }}
        >
            <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator}
                options={{
                    title:'Shop',
                    tabBarIcon:({ focused }) => (
                        <Ionicons 
                            name={focused ? "home" : 'home-outline'}
                            size={22}
                            color={COLORS.primaryDark}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontFamily: 'Lato-Regular',
                        fontSize: 12,
                    },
                    tabBarActiveTintColor: COLORS.text,
                    tabBarInactiveTintColor: COLORS.gray,
                }}
            />  
            <BottomTab.Screen 
                    name="CartTab" 
                    component={CartNavigator}
                    options={{
                    title:'Cart',
                    tabBarIcon:({ focused }) => (
                        <Ionicons 
                            name={focused ? "cart" : 'cart-outline'}
                            size={22}
                            color={COLORS.primaryDark}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontFamily: 'Lato-Regular',
                        fontSize: 12,
                    },
                    tabBarActiveTintColor: COLORS.text,
                    tabBarInactiveTintColor: COLORS.gray,
                    }}
            />
            <BottomTab.Screen name="OrdersTab" component={OrderNavigator}
                options={{
                    title:'Orders',
                    tabBarIcon:({ focused }) => (
                        <Ionicons 
                            name={focused ? "file-tray" : 'file-tray-outline'}
                            size={22}
                            color={COLORS.primaryDark}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontFamily: 'Lato-Regular',
                        fontSize: 12,
                    },
                    tabBarActiveTintColor: COLORS.text,
                    tabBarInactiveTintColor: COLORS.gray,

                 
                }}
            /> 
        </BottomTab.Navigator>
    )
}

export default Tabs;