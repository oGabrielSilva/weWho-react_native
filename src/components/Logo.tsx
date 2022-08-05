import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Img from '../assets/icon.png';
import Margins from '../utils/Margins';

const Logo = ({ size, radius }: { size: number; radius?: boolean }) => {
  const style = StyleSheet.create({
    main: {
      width: size,
      height: size,
      borderRadius: radius ? Margins.RADIUS.max : 0,
    },
  });

  return <Image source={Img} style={style.main} />;
};

export default Logo;
