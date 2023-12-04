import { StyleSheet, Alert, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../context/userContext';
import ProfileScreenNavbar from '../navbars/ProfileScreenNavbar';


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
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => hitLogout()
            },
        ]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProfileScreenNavbar />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogout} activeOpacity={0.9}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        height: '100%',
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: '#2196F3',
        borderRadius: 5,
        height: 35,
        width: '90%',
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 20,
        position: 'absolute',
        bottom: 60
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
