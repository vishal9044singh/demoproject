import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Posts() {
    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <View style={styles.headerLeftContent}>
                    <Image style={styles.headerImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.name}>Vishal Singh</Text>
                </View>
                <View style={styles.headerRightContent}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                </View>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.postImage} source={require('../../../assets/images/man.jpg')} />
            </View>

            <View style={styles.postFooter}>
                <View style={styles.footerLeftContent}>
                    <Octicons name="heart" size={20} color="black" />
                    <Feather name="message-circle" size={20} color="black" />
                    <Ionicons name="share-social-outline" size={20} color="black" />
                </View>
                <View style={styles.footerRightContent}>
                    <MaterialIcons name="save-alt" size={24} color="black" />
                </View>
            </View>

            <View style={styles.postContent}>
                <Text style={styles.totalLikes}>115 Likes</Text>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ad sit sint magni repellat enim excepturi porro nesciunt. Odit doloremque nam eum ut sed, sint unde suscipit tempore ex praesentium.</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        marginTop: 5,
        width: '100%'
    },
    name: {
        marginLeft: 5
    },
    postHeader: {
        height: '10%',
        flexDirection: 'row'
    },
    headerLeftContent: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    headerRightContent: {
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    imageContainer: {
        height: '60%',
        width: '100%',
        backgroundColor: 'cyan'
    },
    postImage: {
        height: '100%',
        width: '100%'
    },
    totalLikes: {
        fontWeight: '400'
    },
    headerImage: {
        height: '75%',
        width: 40,
        borderRadius: 100
    },
    postFooter: {
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    postContent: {
        height: '20%',
        marginLeft: 10,
        marginRight: 10
    },
    footerLeftContent: {
        width: '35%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    footerRightContent: {
        width: '62%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});
