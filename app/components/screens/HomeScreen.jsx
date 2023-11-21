import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HomeScreenNavbar from '../navbars/HomeScreenNavbar';
import Stories from '../otherComponents/Stories';
import NotificationScreen from './NotificationScreen';
import MessageScreen from './MessageScreen';
import Posts from '../otherComponents/Posts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreenNavbar />
            <ScrollView >
                <Stories />
                <View style={styles.posts}>
                    <Posts />
                    <Posts />
                    <Posts />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default function HomeScreen() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={NotificationScreen} options={{ title: 'Notifications' }} />
            <Stack.Screen name="Messages" component={MessageScreen} options={{ title: 'Messages' }} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
