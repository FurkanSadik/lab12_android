import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş</Text>

      <TextInput
        placeholder="Kullanıcı adı"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
