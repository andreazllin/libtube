import { Stack } from "@mantine/core"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import ColorSchemeSwitch from "$components/Settings/ColorSchemeSwitch"
import SettingLink from "$components/Settings/SettingLink"
import useSearchHistory from "$hooks/useSearchHistory"
import { notifications } from "@mantine/notifications"

const Settings: FunctionComponent = () => {
  const navigate = useNavigate()
  const { clearSearchHistory } = useSearchHistory()

  return (
    <>
      <Stack>
        <ColorSchemeSwitch />
        <SettingLink
          label="Instance settings"
          onClick={(): void => {
            navigate("/settings/instance")
          }}
        />
        <SettingLink
          label="Clear search history"
          onClick={(): void => {
            clearSearchHistory()
            notifications.show({
              id: "clear-search-history-alert",
              message: "Search history cleared",
              autoClose: 2500,
              withCloseButton: true,
              color: "green"
            })
          }}
        />
      </Stack>
    </>
  )
}

export default Settings
