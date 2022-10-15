import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import GetStarted from "./screens/getStarted/getStarted";
import Home from "./screens/home/home";
import MusicPlayer from "./screens/musicPlayer/music";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="start" component={GetStarted} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
