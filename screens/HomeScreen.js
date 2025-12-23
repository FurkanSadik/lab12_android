import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoş geldin, {username}</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Ayarlar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    padding: 24,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
