import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Titulo from '../components/Titulo';
import InputCampo from '../components/InputCampo';

export default function PerfilScreen({ perfil, setPerfil }) {
  return (
    <View style={styles.container}>
      <Titulo>Perfil</Titulo>
      <InputCampo
        label="Nome"
        value={perfil.nome}
        onChangeText={(nome) => setPerfil({ ...perfil, nome })}
      />
      <InputCampo
        label="Email"
        value={perfil.email}
        onChangeText={(email) => setPerfil({ ...perfil, email })}
      />
      <Button title="Salvar" onPress={() => alert('Perfil salvo!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
