import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useTheme() {
  const [theme, setTheme] = useState("light");
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("theme")
      .then((stored) => {
        if (stored === "light" || stored === "dark") setTheme(stored);
      })
      .finally(() => setIsThemeReady(true));
  }, []);

  const toggleTheme = async () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    await AsyncStorage.setItem("theme", next);
  };

  return { theme, toggleTheme, isThemeReady };
}
