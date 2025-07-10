import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import InputCampo from '../components/InputCampo';
import Titulo from '../components/Titulo';

export default function NovoGastoScreen({ adicionarGasto }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleAdicionar = () => {
    adicionarGasto(descricao, valor, categoria);
    setDescricao('');
    setValor('');
    setCategoria('');
  };

  return (
    <View style={styles.container}>
      <Titulo>Novo Gasto</Titulo>
      <InputCampo label="Descrição" value={descricao} onChangeText={setDescricao} />
      <InputCampo label="Valor" value={valor} onChangeText={setValor} keyboardType="numeric" />
      <InputCampo label="Categoria" value={categoria} onChangeText={setCategoria} />
      <Button title="Adicionar" onPress={handleAdicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
