import "./styles.css";
import DropDown from "./components/DropDown";
import { createContext, useState } from "react";

const themes = {
  light: {
    color: "#7B2D26",
    background: "#D7C9AA"
  },
  dark: {
    color: "#FFF",
    background: "#2F110E"
  }
};

export const ThemeContext = createContext(themes.light);
export const ToggleThemeContext = createContext(true);

export default function App(): JSX.Element {
  const [theme, setTheme] = useState(themes.light);

  function toggleDarkMode() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleDarkMode}>
        <div
          className="App"
          style={{ background: theme.background, color: theme.color }}
        >
          <DropDown />
        </div>
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
