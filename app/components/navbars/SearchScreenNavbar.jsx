import { View, StyleSheet, TextInput} from "react-native";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

export default function SearchScreenNavbar() {
    const [text, setText] = useState('');

    return (
        <View style={styles.navbar}>
            <View style={styles.inputContainer}>
                <AntDesign name="search1" size={22} color="black" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setText(text)}
                    value={text}
                    placeholder="Search..."
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: '90%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: 'lightgrey',
        alignItems: "center"
    },
    input: {
        height: '100%',
        width: '85%',
        marginLeft: 5
    }
});
