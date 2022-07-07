import { useFonts } from "expo-font";

import Main from "./src/Main";

export default function App() {
  const [loaded] = useFonts({
    Bold: require("./src/assets/fonts/GabrielaStencil-Bold.ttf"),
    Light: require("./src/assets/fonts/GabrielaStencil-Light.ttf"),
    Roboto: require("./src/assets/fonts/Roboto.ttf"),
  });

  if (!loaded) {
    return <></>;
  }

  return <Main />;
}
