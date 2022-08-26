import { PlatformOSType } from 'react-native';
import { Fonts } from 'react-native-paper/lib/typescript/types';

export const fontConfig: {
  [platform in PlatformOSType | 'default']?: Fonts;
} = {
  default: {
    regular: {
      fontFamily: 'lato-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'lato-bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'lato-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'lato-thin',
      fontWeight: 'normal',
    },
  },
  web: {
    regular: {
      fontFamily: 'lato-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'lato-bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'lato-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'lato-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'lato-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'lato-bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'lato-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'lato-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'lato-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'lato-bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'lato-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'lato-thin',
      fontWeight: 'normal',
    },
  },
};
