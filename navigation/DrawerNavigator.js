import React from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

var Drawer = createDrawerNavigator();
var DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
