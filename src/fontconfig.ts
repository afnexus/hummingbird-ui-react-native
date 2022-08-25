import { PlatformOSType } from 'react-native';
import { Fonts } from 'react-native-paper/lib/typescript/types';

export const fontConfig: {
  [platform in PlatformOSType | 'default']?: Fonts;
} = {
  default: {
    regular: {
      fontFamily: 'LatoRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'LatoBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'LatoLight',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'LatoThin',
      fontWeight: 'normal',
    },
  },
  web: {
    regular: {
      fontFamily: 'LatoRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'LatoBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'LatoLight',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'LatoThin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'LatoRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'LatoBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'LatoLight',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'LatoThin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'LatoRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'LatoBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'LatoLight',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'LatoThin',
      fontWeight: 'normal',
    },
  },
};
