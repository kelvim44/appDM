import { VStack, Image, Box, Checkbox, ScrollView } from 'native-base';
import Logo from '../assets/livro2.com.png';
import { Titulo } from '../componentes/Titulo';
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Botao } from '../componentes/Botao';
import { useState } from 'react';
import { materias } from '../utils/CadastroMateriaTexto'; 

export default function CadastroMateria() { 

  const [numSecao, setNumSecao] = useState(0);
    
  function avancarSecao() {
    if(numSecao < materias.length - 1){
      setNumSecao(numSecao + 1);
    }
  }  

  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao - 1);
    }
  }   

  return (
    <ScrollView flex={1} p={5}>
    <VStack flex={1} alignItems="center" p={5} >
      <Image source={Logo} alt="Logo do aplicativo materias" />
      <Titulo>
          {materias[numSecao].titulo}
      </Titulo>
      <Box>
        {
            materias[numSecao].entradaTexto.map(entrada => (
              <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
            ))
          }
      </Box>
      <Box>
        {
            materias[numSecao].checkbox.map(checkbox => (
              <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
            ))
        }
      </Box>
      {numSecao < materias.length - 1 && <Botao onPress={()=> avancarSecao()} mb={10}>Avançar</Botao>}
      {numSecao > 0 && <Botao onPress={()=> voltarSecao()} bgColor='gray.400'>Voltar</Botao>}
    </VStack>
    </ScrollView>
  );
}