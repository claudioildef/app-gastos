import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ResumoScreen from './screens/ResumoScreen';
import NovoGastoScreen from './screens/NovoGastoScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import PerfilScreen from './screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [gastos, setGastos] = useState([]);
  const [perfil, setPerfil] = useState({ nome: '', email: '' });

  const adicionarGasto = (descricao, valor, categoria) => {
    const novo = {
      id: Date.now().toString(),
      descricao,
      valor: parseFloat(valor),
      categoria,
    };
    setGastos([...gastos, novo]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Resumo">
          {() => <ResumoScreen gastos={gastos} />}
        </Tab.Screen>
        <Tab.Screen name="Novo Gasto">
          {() => <NovoGastoScreen adicionarGasto={adicionarGasto} />}
        </Tab.Screen>
        <Tab.Screen name="Histórico">
          {() => <HistoricoScreen gastos={gastos} />}
        </Tab.Screen>
        <Tab.Screen name="Perfil">
          {() => <PerfilScreen perfil={perfil} setPerfil={setPerfil} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
