import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const Stack = createNativeStackNavigator();

function Root() {
  const { user, isReady } = useAuth();
  const { palette } = useTheme();

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: palette.bg }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: palette.bg },
        headerTitleStyle: { color: palette.text },
        headerTintColor: palette.text,
        contentStyle: { backgroundColor: palette.bg },
      }}
    >
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "Ana Sayfa",
              headerRight: () => (
                <Pressable
                  onPress={() => {
                    const routeNames = navigation.getState()?.routeNames || [];
                    if (routeNames.includes("Settings")) navigation.navigate("Settings");
                  }}
                  hitSlop={10}
                >
                  <Text style={{ fontSize: 18, fontWeight: "700", color: palette.text }}>⚙️</Text>
                </Pressable>
              ),
            })}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "Ayarlar" }} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Giriş" }} />
      )}
    </Stack.Navigator>
  );
}

function AppShell() {
  const { palette } = useTheme();
  const navTheme = palette.isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navTheme}>
      <Root />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </AuthProvider>
  );
}
