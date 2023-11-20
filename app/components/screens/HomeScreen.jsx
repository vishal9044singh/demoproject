import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HomeNavbar from '../navbars/HomeScreenNavbar';
import Stories from '../otherComponents/Stories';
import Posts from '../otherComponents/Posts';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
                <HomeNavbar />
            <ScrollView >
                    <Stories />
                <View style={styles.posts}>
                    <Posts />
                    <Posts />
                    <Posts />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomeScreen;
