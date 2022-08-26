import { useFonts } from 'expo-font';

export default function useHummingbirdFonts() {
  return useFonts({
    'lato-regular': require('../assets/fonts/LatoRegular.ttf'),
    'lato-bold': require('../assets/fonts/LatoBold.ttf'),
    'lato-black': require('../assets/fonts/LatoBlack.ttf'),
    'lato-light': require('../assets/fonts/LatoLight.ttf'),
    'lato-thin': require('../assets/fonts/LatoThin.ttf'),
  });
}
