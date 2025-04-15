// AddressFormScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

// Interface para a resposta da API do ViaCep
interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

const AddressFormScreen: React.FC = () => {
  const router = useRouter();

  const [cep, setCep] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const [uf, setUf] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  // Função para buscar os dados do endereço usando a API ViaCep
  const handleFetchAddress = async (value: string) => {
    // Remove caracteres não numéricos
    const cleanCep = value.replace(/\D/g, "");

    if (cleanCep.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cleanCep}/json/`
        );
        const data: ViaCepResponse = await response.json();

        if (data.erro) {
          Alert.alert(
            "CEP não encontrado",
            "Por favor, verifique o CEP digitado."
          );
          return;
        }

        setStreet(data.logradouro || "");
        setDistrict(data.bairro || "");
        setCity(data.localidade || "");
        setUf(data.uf || "");
      } catch (error) {
        Alert.alert(
          "Erro ao buscar CEP",
          "Não foi possível buscar o endereço. Tente novamente."
        );
      }
    } else {
      // Caso o CEP esteja incompleto, limpa os campos
      setStreet("");
      setDistrict("");
      setCity("");
      setUf("");
    }
  };

  const handleChangeCep = (value: string) => {
    setCep(value);
    handleFetchAddress(value);
  };

  const handleSaveAddress = () => {
    router.push({
      pathname: "/address",
      params: {
        cep,
        street,
        number,
        complement,
        reference,
        district,
        city,
        uf,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CEP*</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={handleChangeCep}
        keyboardType="numeric"
        placeholder="Ex: 45203-848"
      />

      <Text style={styles.label}>Rua</Text>
      <TextInput
        style={styles.input}
        value={street}
        onChangeText={setStreet}
        placeholder="Ex: Rua Contorno"
      />

      <Text style={styles.label}>Número*</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={setNumber}
        placeholder="Ex: 266"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Complemento</Text>
      <TextInput
        style={styles.input}
        value={complement}
        onChangeText={setComplement}
        placeholder="Ex: Casa, Apt, Sala..."
      />

      <Text style={styles.label}>Ponto de referência?</Text>
      <TextInput
        style={styles.input}
        value={reference}
        onChangeText={setReference}
        placeholder="Ex: Perto do Hospital"
      />

      {/* Exibe dados retornados pela API */}
      <Text style={styles.infoText}>Bairro: {district}</Text>
      <Text style={styles.infoText}>Cidade: {city}</Text>
      <Text style={styles.infoText}>Estado: {uf}</Text>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
        <Text style={styles.saveButtonText}>Salvar endereço</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  saveButton: {
    backgroundColor: "#dc5c20",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
