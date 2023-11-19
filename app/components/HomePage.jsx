import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { UserContext } from '../context/userContext';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage() {
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getToken() {
            try {
                let access_Token = await AsyncStorage.getItem('access_token');
                console.log('value of access_Token is',access_Token);
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

    //get the user token from async storage,if exists then redirect him to homepage else in loginPage
    if (isLoading) {
        return <ActivityIndicator />
    }
    else {
        return user ? <HomeScreen /> : <LoginScreen />
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