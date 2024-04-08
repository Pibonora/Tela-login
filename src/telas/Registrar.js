import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import {createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from './config/firebase';


const PlaceholderImage = require('../component/image/usuario.png');

const TelaRegistrar = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  const onLoginClick = () => {
      console.log(nomeUsuario);
      console.log(senha);
      console.log(email);
  }

  return (
    <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            <Text style={styles.titulo}>Registrar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={text => setNomeUsuario(text)}
        value={nomeUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        secureTextEntry={false}
      />
      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Criar conta</Text>
      </TouchableOpacity>




    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    gap:10,
  },
  image: {
    width:'80%',
    height:100,
    resizeMode:"contain",
  
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'orange',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaRegistrar;
