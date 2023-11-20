import { StyleSheet, Text, View } from 'react-native';

export default function ReelScreen() {
    return (
        <View style={styles.container}>
            <Text>This is Reel Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
