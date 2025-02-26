// Components/Contenido.tsx
import { StyleSheet, View } from "react-native";
import React from "react";
import Weather from "../screens/Weather";

const Contenido = () => {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default Contenido;
