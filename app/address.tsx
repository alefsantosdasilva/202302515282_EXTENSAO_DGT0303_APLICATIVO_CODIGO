import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddressCard from "../components/AddressCard";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";

export default function Address() {
  const params = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deslize um endereço (direita para editar ou esquerda para excluir) ou
        adicione um novo endereço.
      </Text>
      <AddressCard address={params} />
      <Link href="/address_cep" asChild>
        <TouchableOpacity style={styles.button_address}>
          <Text style={{ color: "#dc5c20" }}>Adicionar novo endereço</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f5f7",
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 12,
    color: "#555",
    marginTop: 10,
  },
  button_address: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#dc5c20",
    alignItems: "center",
    justifyContent: "center",
  },
});
