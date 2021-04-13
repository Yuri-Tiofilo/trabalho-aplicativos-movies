import React, { useState } from 'react';
import { TextInput, Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container, Input } from '../../components/Containers';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const handleNewPage = async (): Promise<void> => {
    // if (name !== '' || age !== '') {
    const user = await AsyncStorage.getItem('user');

    if (user !== null) {
      await AsyncStorage.removeItem('user');

      const data = {
        name,
        age,
      };

      await AsyncStorage.setItem('user', JSON.stringify(data));
    }
    navigation.navigate('Peso', {
      name,
      age,
    });
    // }
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Image
        source={require('../../assets/user.png')}
        style={{ width: 100, height: 100 }}
      />
      <Input
        value={name}
        placeholder="Nome"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Input
        value={age}
        placeholder="Idade"
        onChangeText={(text) => {
          setAge(text);
        }}
      />
      <Button
        onPress={() => {
          handleNewPage();
        }}
      >
        CADASTRAR
      </Button>
    </Container>
  );
};

export default Home;
