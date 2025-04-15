import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.box_login}>
        <Image
          source={require("../assets/images/logo_v1672623700.png")}
          style={styles.image_login}
        />
        <Text style={styles.title_login}>
          Seus pedidos com mais agilidade e segurança
        </Text>
        <Text style={styles.text1_login}>
          Faça login e matenha suas informações salvas para este e os próximos
          pedidos.
        </Text>
        <Text style={styles.text2_login}>
          Selecione uma opção para continuar:
        </Text>
        <TouchableOpacity style={styles.button1_login}>
          <Fontisto name="google" size={24} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Continuar com Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2_login}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Continuar com Google
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f7",
    justifyContent: "space-between",
  },
  box_login: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image_login: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title_login: {
    marginTop: 25,
    width: "80%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text1_login: {
    marginTop: 25,
    width: "70%",
    fontSize: 14,
    textAlign: "center",
    color: "#7f8f9f",
  },
  text2_login: {
    marginTop: 25,
    width: "70%",
    fontSize: 10,
    textAlign: "center",
    color: "#7f8f9f",
  },
  button1_login: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 5,
  },
  button2_login: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    height: 50,
    backgroundColor: "#dc5c20",
    borderRadius: 5,
  },
});
