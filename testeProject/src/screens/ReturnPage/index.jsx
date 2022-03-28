import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ReturnBox } from "../../components/ReturnBox";

export function ReturnPage({route}) {

    return (
        <View style={styles.container}>
                <ReturnBox route={route}></ReturnBox>
        </View>

    )
}