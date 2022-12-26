import React, { useState }  from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import TabNavigator from "./tabs";

const AppNavigator = () => {

    const [userId, setUserId] = useState(null);

    return (
        <NavigationContainer>
            {userId ? <TabNavigator /> : <AuthNavigator/> }
        </NavigationContainer>
    )
}

export default AppNavigator;