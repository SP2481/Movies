import React, { useState } from "react";

const themeContext = React.createContext();
const themeUpdateContext = React.createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState(true);
  function toggleTheme() {
    setTheme((prevtheme) => !prevtheme);
  }
  return;
  <themeContext.Provider>
    <themeUpdateContext.Provider>
      <div>ThemeContext</div>
    </themeUpdateContext.Provider>
  </themeContext.Provider>;
}
