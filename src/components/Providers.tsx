import { FunctionComponent, PropsWithChildren } from "react"
import { ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { theme } from "$constants/theme"
import useColorScheme from "$hooks/useColorScheme"
import { QueryClient, QueryClientProvider } from "react-query"
import { Notifications } from "@mantine/notifications"

export const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 2 } } })

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
        <QueryClientProvider client={queryClient}>
          <Notifications />
          {children}
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Providers
