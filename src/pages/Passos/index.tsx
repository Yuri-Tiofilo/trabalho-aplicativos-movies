import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Input } from '../../components/Containers';
import Button from '../../components/Button';

const Passos: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [passos, setPassos] = useState('');
  const handleNewPage = async (): Promise<void> => {
    if (passos !== '') {
      navigation.navigate('Imc', {
        name: route.params?.name,
        age: route.params?.age,
        heigth: route.params?.heigth,
        weigth: route.params?.weigth,
        almoco: route.params?.almoco,
        janta: route.params?.janta,
        coffe: route.params?.coffe,
        coffe2: route.params?.coffe2,
        passos,
      });
    }
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Image
        source={require('../../assets/passos.png')}
        style={{ width: 100, height: 100 }}
      />
      <Input
        value={passos}
        placeholder="Quantidade de passos no dia"
        onChangeText={(text) => {
          setPassos(text);
        }}
      />

      <Button
        onPress={() => {
          handleNewPage();
        }}
      >
        CADASTRAR
      </Button>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: '#000' }}>VOLTAR</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Passos;
