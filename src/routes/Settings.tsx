import { Stack } from "@mantine/core"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import ColorSchemeSwitch from "$components/Settings/ColorSchemeSwitch"
import SettingLink from "$components/Settings/SettingLink"

const Settings: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <>
      <Stack>
        <ColorSchemeSwitch />
        <SettingLink
          label="Instance settings"
          onClick={() => {
            navigate("/settings/instance")
          }}
        />
      </Stack>
    </>

  )
}

export default Settings
