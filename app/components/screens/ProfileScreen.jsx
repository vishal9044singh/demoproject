import { StyleSheet, Alert, Button, View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../context/userContext';

export default function ProfileScreen() {

    const { setUser } = useContext(UserContext);

    const hitLogout = async () => {
        try {
            await AsyncStorage.removeItem('access_token');
            setUser(false)
        }
        catch (e) {
            console.log('Got error in hitting logout', e)
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
            <Text>This is Profile Screen!</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogout} activeOpacity={0.9}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        height: 45,
        width: '90%',
        marginBottom: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
