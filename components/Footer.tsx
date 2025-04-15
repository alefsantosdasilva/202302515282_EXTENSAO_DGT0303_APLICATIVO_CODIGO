import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Link } from "expo-router";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.footerIcons}>
          <MaterialIcons name="menu-book" size={20} color="#dc5c20" />
          <Text style={styles.footerText}>Cardápio</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/search" asChild>
        <TouchableOpacity style={styles.footerIcons}>
          <Fontisto name="search" size={20} color="#dc5c20" />
          <Text style={styles.footerText}>Busca</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.footerIcons}>
          <MaterialIcons name="login" size={20} color="#dc5c20" />
          <Text style={styles.footerText}>Entrar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerIcons: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#dc5c20",
  },
});
