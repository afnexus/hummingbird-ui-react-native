import {
  primary,
  neutrals,
  secondary,
  red,
} from '@afnexus/hummingbird-ui-assets';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const lightThemeColors = {
  ...DefaultTheme.colors,
  primary: primary[400],
  primaryContainer: primary[400],
  secondary: primary[300],
  secondaryContainer: primary[300],
  tertiary: primary[200],
  tertiaryContainer: primary[200],
  surface: neutrals[50],
  surfaceVariant: primary[300],
  surfaceDisabled: primary[400],
  background: primary[400],
  error: primary[400],
  errorContainer: primary[400],
  onPrimary: neutrals[50],
  onPrimaryContainer: neutrals[50],
  onSecondary: neutrals[50],
  onSecondaryContainer: neutrals[50],
  onTertiary: neutrals[50],
  onTertiaryContainer: neutrals[50],
  onSurface: neutrals[400],
  onSurfaceVariant: neutrals[400],
  onSurfaceDisabled: neutrals[400],
  onError: neutrals[50],
  onErrorContainer: neutrals[400],
  onBackground: neutrals[400],
  outline: primary[400],
  inverseSurface: primary[400],
  inverseOnSurface: primary[400],
  inversePrimary: primary[400],
  backdrop: primary[400],
  elevation: {
    level1: neutrals[50],
    level2: neutrals[50],
    level3: neutrals[100],
    level4: neutrals[100],
    level5: neutrals[100],
  },
};
