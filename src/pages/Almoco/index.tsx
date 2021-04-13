import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

const Almoco: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log('route');
  console.log(route);
  const [almoco, setalmoco] = useState('');
  const handleNewPage = async (): Promise<void> => {
    // if (almoco !== '') {
    const almocoExist = await AsyncStorage.getItem('almoco');

    if (almocoExist !== null) {
      await AsyncStorage.removeItem('almoco');

      const data = {
        almoco,
      };

      await AsyncStorage.setItem('almoco', JSON.stringify(data));
    }
    navigation.navigate('Janta', {
      name: route.params?.name,
      age: route.params?.age,
      heigth: route.params?.heigth,
      weigth: route.params?.weigth,
      almoco,
    });
    // }
  };

  return (
    <View style={{ marginTop: 60 }}>
      <TextInput
        value={almoco}
        placeholder="Peso do Almoço: (em gramas)"
        onChangeText={(text) => {
          setalmoco(text);
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

export default Almoco;
