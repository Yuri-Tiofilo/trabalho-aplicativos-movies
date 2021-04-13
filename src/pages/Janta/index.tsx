import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

const Janta: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [janta, setjanta] = useState('');
  const handleNewPage = async (): Promise<void> => {
    // if (janta !== '') {
    const jantaExist = await AsyncStorage.getItem('janta');

    if (jantaExist !== null) {
      await AsyncStorage.removeItem('janta');

      const data = {
        janta,
      };

      await AsyncStorage.setItem('janta', JSON.stringify(data));
    }
    navigation.navigate('Outros', {
      name: route.params?.name,
      age: route.params?.age,
      heigth: route.params?.heigth,
      weigth: route.params?.weigth,
      almoco: route.params?.almoco,
      janta,
    });
    // }
  };

  return (
    <View style={{ marginTop: 60 }}>
      <TextInput
        value={janta}
        placeholder="Peso da Janta: (em gramas)"
        onChangeText={(text) => {
          setjanta(text);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          handleNewPage();
        }}
      >
        <Text style={{ color: '#000' }}>CADASTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: '#000' }}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Janta;
