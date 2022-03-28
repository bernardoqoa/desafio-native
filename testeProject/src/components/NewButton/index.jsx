import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function NewButton({title, onPress}) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}