import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const MateriasCursadasScreen = () => {
  const [materiasCursadas, setMateriasCursadas] = useState([]);

  useEffect(() => {
    // Carregar matérias cursadas do banco de dados
    axios.get('/api/materias-cursadas')
      .then(response => setMateriasCursadas(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>Tela de Disciplinas Cursadas</Text>
      {materiasCursadas.map((materia) => (
        <Text key={materia.id}>{materia.nome}</Text>
      ))}
    </View>
  );
};

export default MateriasCursadasScreen;
