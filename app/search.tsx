import { StyleSheet, TextInput, View, Text } from "react-native";
import Footer from "../components/Footer";
import ButtonSearch from "../components/ButtonSearch";

export default function Search() {
  const categories = [
    "MARMITEX",
    "SALADAS",
    "REFRIGERANTES",
    "SUCOS E CHÁS",
    "ÁGUAS",
    "CHOCOLATES",
  ];

  return (
    <View style={styles.container}>
      {/* Conteúdo principal */}
      <View style={styles.content}>
        <TextInput
          placeholder="Buscar produtos"
          style={styles.input}
          placeholderTextColor="#888"
        />

        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Categorias</Text>
          <View style={styles.componentsSearch}>
            {categories.map((title, index) => (
              <ButtonSearch key={index} title={title} />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingBottom: 60,
    width: "100%",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    marginTop: 30,
    marginBottom: 20,
    width: "80%",
    height: 50,
    borderColor: "#555",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
  },
  category: {
    width: "80%",
    alignItems: "flex-start",
  },
  componentsSearch: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 300,
    gap: 8,
    marginTop: 10,
    alignContent: "flex-start",
    width: "100%",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
});
