import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AddressCardProps {
  address: {
    cep?: string;
    street?: string;
    number?: string;
    complement?: string;
    reference?: string;
    district?: string;
    city?: string;
    uf?: string;
  };
}

export default function AddressCard({ address }: AddressCardProps) {
  const [selected, setSelected] = useState(false);
  const formatAddress = () => {
    const parts = [
      address.street && `${address.street}, ${address.number || ""}`.trim(),
      address.complement,
      address.district,
      address.city && `${address.city}/${address.uf}`,
      address.reference && `Perto de: ${address.reference}`,
    ].filter(Boolean);

    return parts.join(", ");
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="location-sharp"
        size={24}
        color="#333"
        style={styles.icon}
      />

      {/* Área de texto */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {address.street || "Endereço não informado"}
        </Text>
        <Text style={styles.subtitle}>
          {address.cep && `CEP: ${address.cep}`}
          {formatAddress()}
        </Text>
      </View>

      {/* Botão de seleção */}
      <TouchableOpacity
        onPress={() => setSelected(!selected)}
        style={[
          styles.selectButton,
          selected ? styles.selectedButton : styles.unselectedButton,
        ]}
      >
        {selected && <Ionicons name="checkmark" size={18} color="#FFF" />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  selectButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  unselectedButton: {
    borderWidth: 2,
    borderColor: "#FA620C",
    backgroundColor: "#FFF",
  },
  selectedButton: {
    backgroundColor: "#FA620C",
  },
});
