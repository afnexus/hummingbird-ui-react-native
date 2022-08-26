import { FC } from 'react';
import { Provider } from 'react-native-paper';
import useHummingbirdFonts from '../hooks/useHummingbirdFonts';
import { darkTheme } from '../theme/darkTheme';
import { lightTheme } from '../theme/lightTheme';

type HummingbirdProviderProps = {
  darkMode?: boolean;
  children: JSX.Element;
};

export const HummingbirdProvider: FC<HummingbirdProviderProps> = (
  props: HummingbirdProviderProps
) => {
  const { darkMode = false, children } = props;
  const [fontsLoaded] = useHummingbirdFonts();

  if (!fontsLoaded) return <></>;

  return (
    <Provider theme={darkMode ? darkTheme : lightTheme}>{children}</Provider>
  );
};
