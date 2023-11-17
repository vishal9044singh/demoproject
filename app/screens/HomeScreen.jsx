import React, { useContext } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { UserContext } from '../context/userContext';

export default function HomeScreen() {
    const userContext = useContext(UserContext);
    return (
        <View style={styles.container}>
            <Text>This is HomeScreen</Text>
            <Button title='Logout' onPress={()=>userContext.setUser(false)}/>
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