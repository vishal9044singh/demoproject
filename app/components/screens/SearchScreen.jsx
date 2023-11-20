import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchScreenNavbar from '../navbars/SearchScreenNavbar';

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
                <SearchScreenNavbar />
                <ScrollView >
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative'
    }
});
