import {
  neutrals,
  nPrimary,
  primary,
  red,
  secondary,
} from '@afnexus/hummingbird-ui-assets';
import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { fontConfig } from '../../fontconfig';

export const theme: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary[400],
    onPrimary: neutrals[50],
    secondary: secondary[400],
    onSecondary: neutrals[1000],
    tertiary: primary[400],
    onTertiary: neutrals[50],
    background: neutrals[50],
    onBackground: neutrals[1000],
    surface: primary[400],
    onSurface: neutrals[50],
    surfaceVariant: primary[400],
    outline: primary[400],
    onSurfaceVariant: neutrals[50],
    error: red[600],
    contrastText: neutrals[50],
  },
  fonts: configureFonts(fontConfig),
  roundness: 1,
};
