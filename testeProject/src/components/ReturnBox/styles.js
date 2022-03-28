import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
    },
    nome: {
        backgroundColor: theme.secundaryColors.backgroundColor,
        height:"auto",
        borderRadius: 10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15
    },
    endereço: {
        backgroundColor: theme.secundaryColors.backgroundColor,
        height: "auto",
        borderRadius: 10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15
    },
    renda: {
        backgroundColor: theme.secundaryColors.backgroundColor,
        height:"auto",
        borderRadius: 10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15
    },
    button: {
        alignItems: "flex-end"
    }
})