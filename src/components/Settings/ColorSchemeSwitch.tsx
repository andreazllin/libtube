import { Paper, Text, Switch, useMantineTheme } from "@mantine/core"
import { FunctionComponent } from "react"
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import useColorScheme from "$hooks/useColorScheme"
import { sizes } from "$constants/sizes"

const ColorSchemeSwitch: FunctionComponent = () => {
  const theme = useMantineTheme()
  const { toggleColorScheme } = useColorScheme()

  return (
    <Paper withBorder={true} shadow="xs" p="xl" display="flex" style={{
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Text>Dark mode</Text>
      <Switch
        onClick={toggleColorScheme}
        size="lg"
        checked={theme.colorScheme === 'dark'}
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size={sizes.icon} stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size={sizes.icon} stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Paper>
  )
}

export default ColorSchemeSwitch
