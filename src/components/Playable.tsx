import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import Margins from '../utils/Margins';
import Font from './Font';

interface IPlayableProps {
  title: string;
  background?: string;
  onPress?: () => void;
}

const Playable = ({ title, background, onPress }: IPlayableProps) => {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => {}}
      style={[style.main, { backgroundColor: background || Colors.VARIANT }]}
      activeOpacity={0.6}>
      <Font type="title" center size={Fonts.SIZES.regular + 2}>
        {title}
      </Font>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  main: {
    paddingHorizontal: Margins.MARGINS.large,
    paddingVertical: Margins.MARGINS.medium,
    borderRadius: Margins.RADIUS.max,
  },
});

export default Playable;
