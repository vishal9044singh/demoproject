import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { UserContext } from '../context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import LoginPage from './loginComponents/LoginPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Octicons } from '@expo/vector-icons';
import ReelScreen from './screens/ReelScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getToken() {
            try {
                let access_Token = await AsyncStorage.getItem('access_token');
                console.log('value of access_Token is', access_Token);
                if (access_Token) {
                    setUser(true);
                    setIsLoading(false);
                }
            }
            catch (e) {
                console.log('Got error in getToken', e);
            }
            finally {
                setIsLoading(false);
            }
        })()
    })

    if (isLoading) {
        return <ActivityIndicator />
    }
    else {
        if (user) {
            return (
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false
                        }}>
                        <Tab.Screen name="HomeScreen" component={HomeScreen}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen name="SearchScreen" component={SearchScreen}
                            options={{
                                tabBarLabel: 'Search',
                                tabBarIcon: ({ color }) => (
                                    <AntDesign name="search1" size={26} color={color} />
                                ),
                            }}
                        />
                        <Tab.Screen name="NewPostScreen" component={NewPostScreen}
                            options={{
                                tabBarLabel: 'Add Post',
                                tabBarIcon: ({ color }) => (
                                    <Octicons name="diff-added" size={26} color={color} />
                                ),
                            }}
                        />
                        <Tab.Screen name="ReelScreen" component={ReelScreen}
                            options={{
                                tabBarLabel: 'Reels',
                                tabBarIcon: ({ color }) => (
                                    <Feather name="video" size={26} color={color} />
                                ),
                            }}
                        />
                        <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                            options={{
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={26} />
                                ),

                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            )
        }
        else {
            return <LoginPage />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
