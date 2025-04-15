import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface PropsType {
  title: string;
}

export default function ButtonSearch(props: PropsType) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
    flexGrow: 0,
    paddingHorizontal: 20,
    minWidth: 80,
    margin: 2,
  },
  text: {
    fontSize: 14,
    includeFontPadding: false,
  },
});
