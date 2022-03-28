import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { NewButton } from "../NewButton";
import { useNavigation } from "@react-navigation/native";


export function ReturnBox({route}) {
    //console.log(route.params)

    const navigation = useNavigation();

    const {userInfo, username} = route.params;

    function handleVoltarButton() {

        navigation.navigate("Homepage");
    }

    return (
        <View style={styles.container}>
            <View style={styles.nome}>
                <Text>Nome: {username}</Text>
            </View>
            <View style={styles.endereço}>
                <Text>Endereço:</Text>
                <View>
                    <Text>CEP: {userInfo.cep}</Text>
                    <Text>Logradouro: {userInfo.logradouro}</Text>
                    <Text>Bairro: {userInfo.bairro}</Text>
                    <Text>Localidade: {userInfo.localidade}</Text>
                    <Text>UF: {userInfo.uf}</Text>
                    <Text>DDD: {userInfo.ddd}</Text>
                </View>
            </View>
            <View style={styles.renda}>
                <Text>Renda per capita: {userInfo.rendaPerCapita}</Text>
            </View>
            <View style={styles.button}>
                <NewButton title="Voltar" onPress={handleVoltarButton}/>
            </View>
        </View>
    )
}