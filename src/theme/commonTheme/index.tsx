import { primary, secondary } from '@afnexus/hummingbird-ui-assets';
import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { fontConfig } from '../../fontconfig';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary[400],
    secondary: secondary[400],
  },
  fonts: configureFonts(fontConfig),
};
