import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Input, Container } from '../../components/Containers';
import Button from '../../components/Button';

const Almoco: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [almoco, setalmoco] = useState('');

  const handleNewPage = async (): Promise<void> => {
    if (almoco !== '') {
      navigation.navigate('Janta', {
        name: route.params?.name,
        age: route.params?.age,
        heigth: route.params?.heigth,
        weigth: route.params?.weigth,
        almoco,
      });
    }
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Image
        source={require('../../assets/almoco2.png')}
        style={{ width: 100, height: 100 }}
      />
      <Input
        value={almoco}
        placeholder="Peso do Almoço: (em gramas)"
        onChangeText={(text) => {
          setalmoco(text);
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

export default Almoco;
