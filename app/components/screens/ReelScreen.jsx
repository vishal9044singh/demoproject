import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReelScreenNavbar from '../navbars/ReelScreenNavbar';

export default function ReelScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ReelScreenNavbar/>
            <ScrollView >
                <Text style={styles.about}>This is Reel Screen!</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    about: {
        textAlign: 'center',
        marginTop: 200
    }
});

