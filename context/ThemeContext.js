import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
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

  const palette = useMemo(() => {
    const isDark = theme === "dark";
    return {
      isDark,
      bg: isDark ? "#000000" : "#ffffff",
      text: isDark ? "#ffffff" : "#000000",
      border: isDark ? "#ffffff" : "#000000",
    };
  }, [theme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, isThemeReady, palette }),
    [theme, isThemeReady, palette]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme ThemeProvider içinde kullanılmalıdır");
  return ctx;
}
