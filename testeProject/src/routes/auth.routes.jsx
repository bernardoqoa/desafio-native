import React, {useState} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Homepage } from "../screens/Homepage";
import { ReturnPage } from "../screens/ReturnPage";

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {

    return (
            <Navigator>

                <Screen
                    name="Homepage"
                    component={Homepage}
                />
                <Screen
                    name="ReturnPage"
                    component={ReturnPage}
                />

            </Navigator>
    )
}