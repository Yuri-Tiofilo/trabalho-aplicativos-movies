import React, { useEffect, useState } from 'react';
import { Text, Image } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Container } from '../../components/Containers';
import Button from '../../components/Button';

import { calculateCalories } from '../../utils';

interface Props {
  total: number;
  totalGast: number;
}

// import { Container } from './styles';

const Resultado: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [resultCalories, setResultCalories] = useState<Props>({} as Props);

  useEffect(() => {
    const total =
      Number(route.params?.almoco) +
      Number(route.params?.janta) +
      Number(route.params?.coffe) +
      Number(route.params?.coffe2);

    const result = calculateCalories(total, Number(route.params?.passos));

    setResultCalories(result);
  }, [route]);

  return (
    <Container>
      <Image
        source={require('../../assets/results.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>Calorias:</Text>
      <Text>
        ingeridas:
        {resultCalories.total}
      </Text>
      <Text>
        Gastas:
        {resultCalories.totalGast}
      </Text>

      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        FINALIZAR
      </Button>
    </Container>
  );
};

export default Resultado;
