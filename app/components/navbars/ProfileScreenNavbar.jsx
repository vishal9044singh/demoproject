import { View, Text, StyleSheet } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function ProfileScreenNavbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.heading}>Vishal</Text>
            <View style={styles.rightbar}>
                <Octicons name="diff-added" size={26} color="black" />
                <Feather name="menu" size={26} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: '7%',
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
    },
    heading: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 10
    },
    rightbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '25%',
        marginRight: 10
    },
});
