import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';
import { UserContext } from '../context/userContext';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export default function HomePage() {
    const { user } = useContext(UserContext);
    return user ? <HomeScreen /> : <LoginScreen />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});