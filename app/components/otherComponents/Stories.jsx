import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Stories() {

    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Vishal Singh</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Utkarsh Saxena</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Praveen Raturi</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Arpit Rana</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Vishal Singh</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Vishal Singh</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Vishal Singh</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.storyImageContainer}>
                    <Image style={styles.storyImage} source={require('../../../assets/images/man.jpg')} />
                    <Text style={styles.storyName}>Vishal Singh</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    item: {
        height: 85,
        width: 85,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyImageContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyImage: {
        height: '75%',
        width: '75%',
        borderRadius: 100
    },
    storyName: {
        fontSize: 10
    }
});
