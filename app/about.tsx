import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.component}>
        <Text style={styles.title_about}>Caldo Grosso Restaurante</Text>
        <View style={styles.info_button_about2}>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={15}
            color="#7f929f"
          />
          <Text style={{ color: "#7f929f" }}>Bar & Restaurante</Text>
        </View>
      </View>
      <View style={styles.component}>
        <View style={styles.address}>
          <EvilIcons name="location" size={24} color="#7f929f" />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Endereço</Text>
        </View>
        <Text style={{ color: "#7f929f" }}>
          Avenida Rosiclair Torres Batista, 250 Tulipas, Jundiaí/SP
        </Text>
      </View>
      <View style={styles.component}>
        <View style={styles.address}>
          <Ionicons name="time-outline" size={24} color="#7f929f" />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Horário de funcionamento
          </Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Todos os dias</Text>
        <Text style={{ color: "#7f929f" }}>07h50 às 14h50</Text>
      </View>
      <View style={styles.component}>
        <View style={styles.address}>
          <FontAwesome6 name="sack-dollar" size={20} color="#7f929f" />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Formas de pagamento
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: "#7f929f", marginBottom: 8 }}>
          Pagamento na entrega
        </Text>
        <View style={{ gap: 8 }}>
          <Text>Débito</Text>
          <Text>Crédito</Text>
          <View>
            <Text>Vale Refeição</Text>
            <Text style={{ color: "#7f929f", fontSize: 12 }}>
              Alelo refeição, Sodexo refeição, Ticket restaurante, VR refeição,
              Alelo Alimentação, Ben Visa vale Refeição, Ben Visa vale
              Alimentação, Sodexo Alimentação, Ticket Alimentação, VR
              Alimentação, Verocard Refeição, Verocard Alimentação, pluxee
              alimentação, pluxee refeição
            </Text>
          </View>
          <Text>Dinheiro</Text>
        </View>
      </View>
      <View style={styles.button_about}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#dc5c20" }}>Voltar para o cardápio</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  component: {
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  title_about: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  info_button_about2: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#f8f9fa",
    borderRadius: 25,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },
  button_about: {
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#dc5c20",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
