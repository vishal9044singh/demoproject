import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { UserContext } from '../context/userContext';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccountScreen from './createAccountScreen';

const Stack = createStackNavigator();

function LoginComponent() {
    const navigation = useNavigation();
    const userContext = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log('value of userContext is', userContext)

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        if (!username) {
            Alert.alert('Invalid Details', 'Please Provide Username!');
        }
        else if (!password) {
            Alert.alert('Invalid Details', 'Please Provide Password!');
        }
        else if (username == 'Vishal' && password == '123456') {
            userContext.setUser(true)
        }
        else {
            Alert.alert('Invalid Username/Password', 'Please Provide Valid Credentials!')
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/instagram.png')}
                />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username, Email Address or Mobile Number"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.9}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.forgetPass} onPress={() => navigation.navigate('ForgotPasswordScreen')}>Forgot Password?</Text>
            </View>

            <View style={styles.newAccountContainer}>
                <TouchableOpacity style={styles.newAccount} onPress={()=>navigation.navigate('CreateAccountScreen')} activeOpacity={0.9}>
                    <Text style={styles.newAccountText}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function LoginScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="LoginComponent" component={LoginComponent} options={{headerShown:false}}/>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{title:'Reset Password'}} />
                <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{title:'Create New Account'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end', // Align items from the start (top)
        marginTop: 20,
        height: '100%',
        width: '100%'
    },
    forgetPass:{
        textDecorationLine:'underline'
    },
    formContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        height: 80,
        width: 80,
    },
    input: {
        height: 50,
        width: '90%',
        marginBottom: 20,
        paddingLeft: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
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
    newAccountContainer: {
        flex: 1,
        width: '90%',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    newAccount: {
        padding: 10,
        height: 50,
        width: '100%',
        marginBottom: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 20,
        borderColor: '#2196F3',
        borderWidth: 1,
    },
    newAccountText: {
        color: '#2196F3',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});