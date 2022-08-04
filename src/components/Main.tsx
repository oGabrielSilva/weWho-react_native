import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../utils/Colors';
import Margins from '../utils/Margins';

interface IMainProps {
  children: ReactNode;
}

const Main = ({ children }: IMainProps) => {
  return <View style={styles.main}>{children}</View>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: Margins.MARGINS.large,
    backgroundColor: Colors.PRIMARY,
  },
});

export default Main;
