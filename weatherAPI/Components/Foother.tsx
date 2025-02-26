import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = ({ fecha, grupo }: { fecha: string; grupo: string }) => {
  return (
    <View style={styles.footer}>
      <Text>Fecha: {fecha}</Text>
      <Text>Grupo: {grupo}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
    color: "#000",
  },
});
