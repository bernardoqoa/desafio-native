import React, {useState} from "react";
import axios from 'axios';
import {View, Text, Alert} from "react-native"
import { Box } from "../../components/Box";
import { styles } from "./styles";
import { NewButton } from "../../components/NewButton";
import { useNavigation } from "@react-navigation/native";

export function Homepage() {

    const navigation = useNavigation();

    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [CEP, setCEP] = useState("")
    const [renda, setRenda] = useState("")
    const [numDependentes, setNumDependentes] = useState("")
    
    const data = {
        nome: nome,
        cpf: CPF,
        cep: CEP,
        renda: renda,
        numDependentes: numDependentes
    }

    function handleEnviarButton() {
        
        axios.post('http://10.81.18.183:3010/enviar', data)
        .then(res => {
            //console.log(res.data);
            //avantia: 'http://10.81.18.183:3010/enviar'
            //casa: 'http://192.168.20.229:3010/enviar'
            //console.log(data);
            const userInfo = res.data;
            const username = data.nome
            navigation.navigate("ReturnPage", {userInfo, username});
        })
        .catch(() => {
            Alert.alert("cep inválido")
        })
        
    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}>Vamos calcular a renda per capita de sua familia</Text>
            <Box title="Nome:" onChange={setNome} value={nome}></Box>
            <Box title="CPF:" onChange={setCPF} value={CPF}></Box>
            <Box title="CEP:" onChange={setCEP} value={CEP}></Box>
            <Box title="Renda:" onChange={setRenda} value={renda}></Box>
            <Box title="Número de dependentes:" onChange={setNumDependentes} value={numDependentes}></Box>
            <View style={styles.buttonContainer}>
                <NewButton title="Enviar" onPress={handleEnviarButton}></NewButton>
            </View>
            
        </View>

    )
}


