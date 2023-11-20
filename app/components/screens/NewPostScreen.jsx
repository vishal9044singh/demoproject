import { StyleSheet, Text, View } from 'react-native';

export default function NewPostScreen() {
    return (
        <View style={styles.container}>
            <Text>This is New Post Screen!</Text>
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
