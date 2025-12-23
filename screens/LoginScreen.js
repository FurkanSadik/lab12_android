import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const { palette } = useTheme();

  const handleLogin = () => {
    const cleaned = username.trim();
    if (!cleaned) return;
    login(cleaned);
  };

  return (
    <View style={[styles.container, { backgroundColor: palette.bg }]}>
      <Text style={[styles.title, { color: palette.text }]}>Giriş</Text>

      <TextInput
        placeholder="Kullanıcı adı"
        placeholderTextColor={palette.isDark ? "#aaaaaa" : "#666666"}
        value={username}
        onChangeText={setUsername}
        style={[styles.input, { borderColor: palette.border, color: palette.text }]}
        autoCapitalize="none"
      />

      <Pressable style={[styles.button, { borderColor: palette.border }]} onPress={handleLogin}>
        <Text style={[styles.buttonText, { color: palette.text }]}>Giriş Yap</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "700", textAlign: "center" },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16 },
  button: { borderWidth: 1, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "700" },
});
