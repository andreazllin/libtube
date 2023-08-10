import useColorSchemeStore from "$store/useColorSchemeStore"
import { ColorScheme } from "@mantine/core"

interface UseColorSchemeReturnType {
  colorScheme: ColorScheme
  setColorScheme: (colorScheme: ColorScheme) => void
  toggleColorScheme: () => void
}

export default function useColorScheme(): UseColorSchemeReturnType {
  const colorScheme = useColorSchemeStore.use.colorScheme()
  const setColorScheme = useColorSchemeStore.use.setColorScheme()

  const toggleColorScheme = (): void => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme
  }
}
