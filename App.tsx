import { extendTheme, NativeBaseProvider, Text, StatusBar } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import { useFonts, DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import Loading from "./src/components/Loading";
//example color 
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const [fontsLoaded] = useFonts({ DMSerifDisplay_400Regular })
  return (
    <NativeBaseProvider theme={theme}>

      {fontsLoaded ? (
        <>
          <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
          />
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </>
      ) : <Loading />}
    </NativeBaseProvider>
  );
}

