import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HomeNavbar from '../navbars/HomeScreenNavbar';
import Stories from '../otherComponents/Stories';
import Posts from '../otherComponents/Posts';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.navbar}>
                <HomeNavbar />
            </View>

            <View style={styles.stories}>
                <Stories />
            </View>

            <View style={styles.posts}>
                <Posts />
                <Posts />
                <Posts />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        height: '6%'
    },
    stories: {
        height: '10%',
    }
});

export default HomeScreen;
