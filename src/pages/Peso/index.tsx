import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container, Input } from '../../components/Containers';

const Peso: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const [heigth, setheigth] = useState('');
  const [weigth, setweigth] = useState('');
  const handleNewPage = (): void => {
    if (heigth !== '' || weigth !== '') {
      navigation.navigate('Almoco', {
        name: routes.params?.name,
        age: routes.params?.age,
        heigth,
        weigth,
      });
    }
  };

  return (
    <Container>
      <Image
        source={require('../../assets/balanca.png')}
        style={{ width: 100, height: 100 }}
      />
      <TextInput
        value={heigth}
        placeholder="Altura"
        onChangeText={(text) => {
          setheigth(text);
        }}
      />
      <TextInput
        value={weigth}
        placeholder="Peso"
        onChangeText={(text) => {
          setweigth(text);
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

export default Peso;
