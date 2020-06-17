import React from "react";

import { useTheme, themes } from "../../context/Theme";

export default function Container({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {children}

      <hr />

      <button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        {theme === themes.light ? "Switch theme: Dark mode" : "Switch theme: Light mode"}
      </button>
    </div>
  );
}
