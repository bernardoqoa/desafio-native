import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10,
        //backgroundColor: "blue"
    },
    title: {
        marginBottom: 15,
        alignSelf: "center"
    },
    buttonContainer: {
        alignItems: "flex-end",
        marginRight: 10
    }
})