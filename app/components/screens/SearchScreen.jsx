import { StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchScreenNavbar from '../navbars/SearchScreenNavbar';

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <SearchScreenNavbar />
            <ScrollView >
                <Text style={styles.about}>This is Search Screen.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    about: {
        textAlign: 'center',
        marginTop: 200
    }
});
