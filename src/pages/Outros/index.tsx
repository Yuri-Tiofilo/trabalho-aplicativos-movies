import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import { Container, Input } from '../../components/Containers';

const Outros: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [coffe, setCoffe] = useState('');
  const [coffe2, setCoffe2] = useState('');
  const handleNewPage = async (): Promise<void> => {
    if (coffe !== '') {
      navigation.navigate('Passos', {
        name: route.params?.name,
        age: route.params?.age,
        heigth: route.params?.heigth,
        weigth: route.params?.weigth,
        almoco: route.params?.almoco,
        janta: route.params?.janta,
        coffe,
        coffe2,
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
        value={coffe}
        placeholder="Peso do café da Manhã(g)"
        onChangeText={(text) => {
          setCoffe(text);
        }}
      />
      <Input
        value={coffe2}
        placeholder="Peso do café da Tarde:(g)"
        onChangeText={(text) => {
          setCoffe2(text);
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

export default Outros;
