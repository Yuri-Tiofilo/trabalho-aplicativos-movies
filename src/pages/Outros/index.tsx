import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

const Outros: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [coffe, setCoffe] = useState('');
  const [coffe2, setCoffe2] = useState('');
  const handleNewPage = async (): Promise<void> => {
    // if (janta !== '') {
    const outherExist = await AsyncStorage.getItem('outros');

    if (outherExist !== null) {
      await AsyncStorage.removeItem('outros');

      const data = {
        coffe,
        coffe2,
      };

      await AsyncStorage.setItem('outros', JSON.stringify(data));
    }

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
    // }
  };

  return (
    <View style={{ marginTop: 60 }}>
      <TextInput
        value={coffe}
        placeholder="Peso do café da Manhã(g)"
        onChangeText={(text) => {
          setCoffe(text);
        }}
      />
      <TextInput
        value={coffe2}
        placeholder="Peso do café da Tarde:(g)"
        onChangeText={(text) => {
          setCoffe2(text);
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

export default Outros;
