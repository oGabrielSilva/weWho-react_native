import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import GlobalContextProvider from './context/GlobalContextProvider';
import Router from './router/Router';
import Colors from './utils/Colors';

const App: FC = () => {
  return (
    <GlobalContextProvider>
      <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
      <Router />
    </GlobalContextProvider>
  );
};

export default App;
