import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GastoCard from '../components/GastoCard';
import Titulo from '../components/Titulo';

export default function HistoricoScreen({ gastos }) {
  return (
    <View style={styles.container}>
      <Titulo>Histórico</Titulo>
      <FlatList
        data={gastos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GastoCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
