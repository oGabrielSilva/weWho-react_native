import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

interface IFontProps {
  children: string;
  type?: 'text' | 'subTitle' | 'title';
  size?: number;
  center?: boolean;
  upper?: boolean;
  color?: 'danger' | 'normal';
}

const Font = ({ type, color, upper, center, size, children }: IFontProps) => {
  const fontStyle = StyleSheet.create({
    main: {
      ...(type ? styles[type] : styles.text),
      ...(size ? { fontSize: size } : {}),
      ...(center ? { textAlign: 'center' } : { textAlign: 'left' }),
      ...(upper ? { textTransform: 'uppercase' } : {}),
      ...(color === 'danger'
        ? { color: Colors.VARIANT }
        : { color: Colors.TEXT }),
    },
  });

  return <Text style={fontStyle.main}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.MONTSERRAT.regular,
    fontSize: Fonts.SIZES.regular,
  },
  subTitle: {
    fontFamily: Fonts.SOURCE_SANS_PRO.bold,
    fontSize: Fonts.SIZES.subTitle,
  },
  title: {
    fontFamily: Fonts.SOURCE_SANS_PRO.bold,
    fontSize: Fonts.SIZES.title,
  },
});

export default Font;
