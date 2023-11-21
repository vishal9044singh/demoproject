import React, { useContext, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { UserContext } from '../context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Octicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './loginComponents/LoginPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReelScreen from './screens/ReelScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function HomePage() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        (async function getToken() {
            try {
                let access_Token = await AsyncStorage.getItem('access_token');
                console.log('value of access_Token is', access_Token);
                if (access_Token) {
                    setUser(true);
                }
            }
            catch (e) {
                console.log('Got error in getToken', e);
            }
            finally {
                await SplashScreen.hideAsync();
            }
        })()
    }, [])

    if (user) {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    activeColor="#e91e63"
                    barStyle={{ backgroundColor: 'tomato' }}
                    screenOptions={{
                        tabBarHideOnKeyboard: true,
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
