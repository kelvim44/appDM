import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import {Checkbox} from 'native-base'
import axios from 'axios';

const MateriasACursarScreen = ({ navigation }) => {
  const [materiasACursar, setMateriasACursar] = useState([]);

  useEffect(() => {
    // Carregar matérias a cursar do banco de dados
    axios.get('/api/materias-a-cursar')
      .then(response => setMateriasACursar(response.data))
      .catch(error => console.error(error));
  }, []);

  const marcarComoCursada = (id) => {
    // Marcar matéria como cursada no banco de dados
    axios.post('/api/marcar-como-cursada', { id })
      .then(response => {
        // Atualizar a lista de matérias a cursar
        setMateriasACursar(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      <Text>Tela de Disciplinas a Cursar</Text>
      {materiasACursar.map((materia) => (
        <View key={materia.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Checkbox
            value={materia.marcada}
            onChange={() => marcarComoCursada(materia.id)}
          />
          <Text style={{ marginLeft: 10 }}>{materia.nome}</Text>
        </View>
      ))}
    </View>
  );
};

export default MateriasACursarScreen;