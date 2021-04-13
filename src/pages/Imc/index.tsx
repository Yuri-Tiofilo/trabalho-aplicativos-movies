import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Container } from '../../components/Containers';
import Button from '../../components/Button';

import { calculateImc } from '../../utils/index';

// import { Container } from './styles';

const Imc: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [resultImc, setResultImc] = useState('');

  useEffect(() => {
    const result = calculateImc(
      Number(route.params?.heigth),
      Number(route.params?.weigth),
    );

    setResultImc(result);
  }, [route]);

  const handleResult = (): void => {
    navigation.navigate('Resultado', {
      name: route.params?.name,
      age: route.params?.age,
      heigth: route.params?.heigth,
      weigth: route.params?.weigth,
      almoco: route.params?.almoco,
      janta: route.params?.janta,
      coffe: route.params?.coffe,
      coffe2: route.params?.coffe2,
      passos: route.params?.passos,
    });
  };

  return (
    <Container>
      <Image
        source={require('../../assets/imc.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>
        Você está no:
        {resultImc}
      </Text>

      <Button
        onPress={() => {
          handleResult();
        }}
      >
        PRÓXIMO
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

export default Imc;
