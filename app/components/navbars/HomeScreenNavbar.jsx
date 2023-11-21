import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreenNavbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <Text style={styles.heading}>Instagram</Text>
      <View style={styles.rightbar}>
        <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" onPress={() => navigation.navigate('Notifications')} />
        <AntDesign name="message1" size={24} color="black" onPress={() => navigation.navigate('Messages')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: '7%',
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 10
  },
  rightbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '25%',
    marginRight: 10
  },
});
