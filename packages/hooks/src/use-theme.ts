import { useLayoutEffect } from "react";
// Hook
export default function useTheme(theme: any) {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      Object.keys(theme).map((k) => {
        return document.documentElement.style.setProperty(`--${k}`, theme[k]);
      });
    },
    [theme], // Only call again if theme object reference changes
  );
}
