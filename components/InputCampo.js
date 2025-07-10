import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

export default function InputCampo({ label, value, onChangeText, keyboardType = 'default' }) {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 6,
  },
});
