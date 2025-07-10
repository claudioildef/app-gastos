import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Titulo from '../components/Titulo';

export default function ResumoScreen({ gastos }) {
  const total = gastos.reduce((s, g) => s + g.valor, 0);

  return (
    <View style={styles.container}>
      <Titulo>Resumo</Titulo>
      <Text>Total: R$ {total.toFixed(2)}</Text>
      <Text style={{ color: total >= 0 ? 'green' : 'red' }}>
        Saldo: R$ {total.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
