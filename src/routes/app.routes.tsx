import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Peso from '../pages/Peso';
import Almoco from '../pages/Almoco';
import Janta from '../pages/Janta';
import Passos from '../pages/Passos';
import Outros from '../pages/Outros';
import Imc from '../pages/Imc';
import Resultado from '../pages/Resultado';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator initialRouteName="Home">
    <App.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <App.Screen name="Peso" component={Peso} />
    <App.Screen name="Almoco" component={Almoco} />
    <App.Screen name="Janta" component={Janta} />
    <App.Screen name="Outros" component={Outros} />
    <App.Screen name="Passos" component={Passos} />
    <App.Screen name="Imc" component={Imc} />
    <App.Screen name="Resultado" component={Resultado} />
  </App.Navigator>
);

export default AppRoutes;
