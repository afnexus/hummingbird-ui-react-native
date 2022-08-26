import {
  MD3DarkTheme as DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { fontConfig } from '../../fontconfig';
import { commonTheme, typescale } from '../commonTheme';
import { darkThemeColors } from './colors';

export const darkTheme: ThemeProp = {
  ...DefaultTheme,
  ...commonTheme,
  colors: darkThemeColors,
};
