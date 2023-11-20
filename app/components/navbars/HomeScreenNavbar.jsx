import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function HomeNavbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.heading}>Instagram</Text>
      <View style={styles.rightbar}>
        <AntDesign style={{ marginRight: 10 }} name="hearto" size={32} color="black" />
        <AntDesign name="message1" size={32} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: '100%',
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'flex-end',
    padding: 15,
    borderBottomColor: 'lightgrey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
  },
  rightbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '15%'
  },
});
