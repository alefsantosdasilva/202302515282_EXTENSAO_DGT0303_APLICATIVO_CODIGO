import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ImageURISource,
} from "react-native";

interface OrdeProps {
  title: string;
  description: string;
  price: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

export default function Orde({
  title,
  description,
  price,
  imageSource,
  onPress,
}: OrdeProps) {
  // Fallback para imagem padrão
  const defaultImage = require("../assets/images/normal.jpg");

  return (
    <View style={styles.shadowContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.content}>
          <View style={styles.leftSide}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {title}
            </Text>

            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {description}
            </Text>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>

          <View style={styles.rightSide}>
            <Image
              source={imageSource || defaultImage}
              style={styles.image}
              resizeMode="center"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    // Sombras para Android e iOS
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  content: {
    flexDirection: "row",
    padding: 15,
  },
  leftSide: {
    flex: 1,
    marginRight: 15,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2d2d2d",
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginBottom: 12,
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  rightSide: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    borderRadius: 4,
  },
});