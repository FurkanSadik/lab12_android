import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import useTheme from "../hooks/useTheme";

export default function SettingsScreen() {
  const { logout } = useAuth();
  const { theme, toggleTheme, isThemeReady } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>

      <Text style={styles.subtitle}>
        Tema: {theme === "dark" ? "Koyu" : "Açık"}
      </Text>

      <Pressable
        style={styles.button}
        onPress={toggleTheme}
        disabled={!isThemeReady}
      >
        <Text style={styles.buttonText}>Temayı Değiştir</Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, gap: 12 },
  title: { fontSize: 26, fontWeight: "700" },
  subtitle: { fontSize: 16, textAlign: "center" },
  button: { borderWidth: 1, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 18, marginTop: 6 },
  buttonText: { fontSize: 16, fontWeight: "700" },
  logoutButton: { borderWidth: 1, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 18, marginTop: 10 },
  logoutText: { fontSize: 16, fontWeight: "700" },
});
