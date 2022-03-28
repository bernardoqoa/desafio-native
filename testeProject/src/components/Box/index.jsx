import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function Box({title, onChange}) {

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <TextInput style={styles.input} onChangeText={onChange}></TextInput> 
        </View>
    )
}