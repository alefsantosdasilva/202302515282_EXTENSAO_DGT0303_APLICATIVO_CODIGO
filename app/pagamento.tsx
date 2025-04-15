import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useCartStore } from "../store/cartStore";

export default function Pagamento() {
  const { total, clearCart } = useCartStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forma de Pagamento</Text>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.paymentText}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.paymentText}>Cartão de Crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => {
          Alert.alert(
            "Pedido Finalizado",
            "Pagamento será realizado na entrega"
          );
          clearCart();
          router.replace("/");
        }}
      >
        <Text style={styles.paymentText}>Dinheiro</Text>
      </TouchableOpacity>

      <Text style={styles.total}>Total: R$ {total().toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  paymentOption: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e9ecef",
    marginBottom: 15,
  },
  paymentText: {
    fontSize: 18,
    color: "#212529",
    textAlign: "center",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ef4444",
    textAlign: "center",
    marginTop: 30,
  },
  // Adicione mais estilos se necessário
});
