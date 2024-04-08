import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createUserWithEmailAndPassword } from "firebase/auth";
import ImageViewer from '../component/ImageViewer';
// import { auth } from './config/firebase';


const PlaceholderImage = require('../component/image/aluno.png');

const TelaHome = () => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [ra, setRA] = useState('');
  const [semestre, setSemestre] = useState('');
  const [disciplina, setDisciplina] = useState('');


  const Aluno = () => {
    console.log('Nome do aluno:', nomeAluno);
    console.log('RA:', ra);
    console.log('Semestre:', semestre);
    console.log('Disciplina:', disciplina);
  };

  const onLoginClick = () => {
      console.log(nomeAluno);
      console.log(ra);
      console.log(semestre);
      console.log(disciplina);
  }

  return (
    <View style={styles.container}>
            <ImageViewer image={PlaceholderImage} />
            <Text style={styles.titulo}>Aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do aluno"
        onChangeText={text => setNomeAluno(text)}
        value={nomeAluno}
      />
      <TextInput
        style={styles.input}
        placeholder="RA"
        onChangeText={text => setRA(text)}
        value={ra}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        onChangeText={text => setSemestre(text)}
        value={semestre}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Disciplina"
        onChangeText={text => setDisciplina(text)}
        value={disciplina}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Entrar</Text>
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

export default TelaHome;
