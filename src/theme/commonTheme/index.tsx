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
import {
  MD3TypescaleKey,
  ThemeProp,
} from 'react-native-paper/lib/typescript/types';
import { fontConfig } from '../../fontconfig';

const typescale = () =>
  Object.fromEntries(
    Object.keys(DefaultTheme.typescale).map((rawKey: string) => {
      const key = rawKey as MD3TypescaleKey;
      return [
        key,
        {
          fontFamily: 'lato-regular',
          letterSpacing: DefaultTheme.typescale[key].letterSpacing,
          fontWeight: DefaultTheme.typescale[key].fontWeight,
          lineHeight: DefaultTheme.typescale[key].lineHeight,
          fontSize: DefaultTheme.typescale[key].fontSize,
        },
      ];
    })
  );

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
  typescale: typescale(),
  roundness: 1,
};
