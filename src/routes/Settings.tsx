import { Text, Stack } from "@mantine/core"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import ColorSchemeSwitch from "$components/Settings/ColorSchemeSwitch"
import SettingLink from "$components/Settings/SettingLink"

const Settings: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <>
      <Text component="h1" size="2xl">Settings</Text>
      <Stack>
        <ColorSchemeSwitch />
        <SettingLink
          label="Instances"
          onClick={() => {
            navigate("/settings/instances")
          }}
        />
      </Stack>
    </>

  )
}

export default Settings
