import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GastoCard({ item }) {
  return (
    <View style={styles.card}>
      <Text>{item.descricao} - {item.categoria}</Text>
      <Text style={{ color: item.valor >= 0 ? 'green' : 'red' }}>
        R$ {item.valor.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
});
