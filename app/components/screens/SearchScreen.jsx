import { StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Posts from '../otherComponents/Posts';
import SearchScreenNavbar from '../navbars/SearchScreenNavbar';

export default function SearchScreen() {
    return (
        <SafeAreaView >
            <ScrollView >
                <SearchScreenNavbar />
                <Text style={styles.about}>This is Search Screen.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    about: {
        textAlign: 'center',
        marginTop: 200
    }
});

