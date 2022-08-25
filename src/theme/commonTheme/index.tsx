import { primary } from '@afnexus/hummingbird-ui-assets';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary[100],
  },
};
