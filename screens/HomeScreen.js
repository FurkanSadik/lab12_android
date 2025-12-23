import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ route }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoş geldin, {username}</Text>
      <Text style={styles.hint}>Ayarlar için sağ üstteki ⚙️ simgesini kullan.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 24,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
  hint: {
    fontSize: 14,
    textAlign: "center",
  },
});
