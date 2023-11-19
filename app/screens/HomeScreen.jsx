import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/userContext';

export default function HomeScreen() {
    const { setUser } = useContext(UserContext);

    const hitLogout = async ()=>{
        try{
            await AsyncStorage.removeItem('access_token');
            setUser(false)
        }
        catch(e){
            
        }
    }

    const handleLogout = () => {
        Alert.alert('Confirmation', 'Are you sure you want to Logout!', [
            {
                text: 'Cancel',
                // onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => hitLogout()
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Text>This is HomeScreen</Text>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});