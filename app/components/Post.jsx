import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Posts() {
    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <View >

                </View>
                <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </View>
            <View style={styles.postImage}>
                <Image style={styles.postImage} source={require('../../../assets/images/man.jpg')} />
            </View>
            <View style={styles.postFooter}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },
    postImage: {
        height: '100%',
        width: '100%'
    }
});
