import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [etanol, setEtanol] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const precoGasolina = parseFloat(gasolina.replace(',', '.'));
    const precoEtanol = parseFloat(etanol.replace(',', '.'));

    if (!precoGasolina || !precoEtanol) {
      setResultado('Preencha os dois campos corretamente');
      return;
    }

    const proporcao = precoEtanol / precoGasolina;

    if (proporcao < 0.7) {
      setResultado('Melhor usar Etanol');
    } else {
      setResultado('Melhor usar Gasolina');
    }

    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de Combustível</Text>

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={setGasolina}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço do Etanol"
          keyboardType="numeric"
          value={etanol}
          onChangeText={setEtanol}
        />

        <View style={styles.button} onTouchEnd={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>

        {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f2f2f5',
  },
  logo: {
    height: 80,
    marginBottom: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#3348FF',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 24,
    textAlign: 'center',
  },
});
