import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Giriş" }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "Ana Sayfa",
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate("Settings")}>
                  <Text style={{ fontSize: 18, fontWeight: "700" }}>⚙️</Text>
                </Pressable>
              ),
            })}
          />

          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Ayarlar" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
