import {
  MD3LightTheme as DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { fontConfig } from '../../fontconfig';
import { commonTheme, typescale } from '../commonTheme';
import { lightThemeColors } from './colors';

export const lightTheme: ThemeProp = {
  ...DefaultTheme,
  ...commonTheme,
  colors: lightThemeColors,
};
