import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native';

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
    <View style={{ marginTop: 60 }}>
      <TextInput
        value={name}
        placeholder="Nome"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        value={age}
        placeholder="Idade"
        onChangeText={(text) => {
          setAge(text);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          handleNewPage();
        }}
      >
        <Text style={{ color: '#000' }}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
