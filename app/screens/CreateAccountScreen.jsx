import { View, Text, StyleSheet } from "react-native";

export default function CreateAccountScreen() {
    return (
        <View style={styles.container}>
            <Text>This is Create Account Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})