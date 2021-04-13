import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

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
    <View style={{ marginTop: 60 }}>
      <TextInput
        value={passos}
        placeholder="Quantidade de passos no dia"
        onChangeText={(text) => {
          setPassos(text);
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

export default Passos;
