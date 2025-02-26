import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = ({
  titulo,
  nombre,
  imagen,
}: {
  titulo: string;
  nombre: string;
  imagen: any;
}) => {
  return (
    <View style={styles.header}>
      <Image source={imagen} style={styles.image} />
      <View>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.subtitle}>{nombre}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    color: "#000",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
  },
});
