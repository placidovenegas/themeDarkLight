"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function ProvidersTheme({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ProvidersTheme;
