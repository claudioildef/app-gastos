import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Titulo({ children }) {
  return <Text style={styles.titulo}>{children}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
