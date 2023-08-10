import { FunctionComponent, PropsWithChildren } from "react"
import { ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { theme } from "$constants/theme"
import useColorScheme from "$hooks/useColorScheme"

const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          ...theme,
          colorScheme
        }}
        withGlobalStyles={true}
        withNormalizeCSS={true}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Providers
