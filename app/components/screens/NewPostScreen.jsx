import { StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewPostScreenNavbar from '../navbars/NewPostScreenNavbar';

export default function NewPostScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <NewPostScreenNavbar />
            <ScrollView >
                <Text style={styles.about}>This is New Post Screen!</Text>
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
        marginTop: 250
    }
});
