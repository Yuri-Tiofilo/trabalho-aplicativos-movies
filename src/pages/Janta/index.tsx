import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';
import { Input, Container } from '../../components/Containers';

const Janta: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [janta, setjanta] = useState('');
  const handleNewPage = async (): Promise<void> => {
    if (janta !== '') {
      navigation.navigate('Outros', {
        name: route.params?.name,
        age: route.params?.age,
        heigth: route.params?.heigth,
        weigth: route.params?.weigth,
        almoco: route.params?.almoco,
        janta,
      });
    }
  };

  return (
    <Container>
      <Image
        source={require('../../assets/janta.png')}
        style={{ width: 100, height: 100 }}
      />
      <Input
        value={janta}
        placeholder="Peso da Janta: (em gramas)"
        onChangeText={(text) => {
          setjanta(text);
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

export default Janta;
