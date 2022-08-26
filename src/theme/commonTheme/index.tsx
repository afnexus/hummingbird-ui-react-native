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

export const typescale = () =>
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

export const commonTheme: ThemeProp = {
  fonts: configureFonts(fontConfig),
  typescale: typescale(),
  roundness: 1,
};
