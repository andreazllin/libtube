import { ColorSchemeProvider, MantineProvider, MantineProviderProps } from "@mantine/core"
import { FunctionComponent } from "react"
import { theme } from "$constants/theme"
import { Notifications } from "@mantine/notifications"
import useColorScheme from "$hooks/useColorScheme"

interface Props extends MantineProviderProps { }

const MantineWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          ...theme,
          colorScheme
        }}
        withGlobalStyles={true}
        withNormalizeCSS={true}
        {...props}
      >
        <Notifications />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MantineWrapper
