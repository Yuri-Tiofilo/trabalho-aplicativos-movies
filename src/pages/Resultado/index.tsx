import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

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
    <View>
      <Text>Calorias:</Text>
      <Text>
        ingeridas:
        {resultCalories.total}
      </Text>
      <Text>
        Gastas:
        {resultCalories.totalGast}
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={{ color: '#000' }}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Resultado;
