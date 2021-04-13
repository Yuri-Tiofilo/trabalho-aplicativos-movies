import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

interface PropsParams {
  name: string;
  age: string;
}

interface Props {
  params: PropsParams;
}

const Peso: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  console.log(routes.params?.name);
  const [heigth, setheigth] = useState('');
  const [weigth, setweigth] = useState('');
  const handleNewPage = async (): Promise<void> => {
    const dataUser = await AsyncStorage.getItem('userData');

    if (dataUser !== null) {
      await AsyncStorage.removeItem('userData');

      const data = {
        heigth,
        weigth,
      };

      await AsyncStorage.setItem('userData', JSON.stringify(data));
    }
    navigation.navigate('Almoco', {
      name: routes.params?.name,
      age: routes.params?.age,
      heigth,
      weigth,
    });
  };

  return (
    <View style={{ marginTop: 60 }}>
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

export default Peso;
