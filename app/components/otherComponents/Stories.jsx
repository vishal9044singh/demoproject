import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Stories() {
    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.item}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 4</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 5</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 6</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 7</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 8</Text>
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
        height:75,
        width:75,
        margin: 5,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
});
