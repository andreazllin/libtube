import { FunctionComponent, PropsWithChildren } from "react"
import { MantineProvider } from "@mantine/core"
import { theme } from "$constants/theme"

const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      withGlobalStyles={true}
      withNormalizeCSS={true}
    >
      {children}
    </MantineProvider>
  )
}

export default Providers
