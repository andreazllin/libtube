import { Paper, Text, PaperProps } from "@mantine/core"
import { FunctionComponent } from "react"
import { IconChevronRight } from "@tabler/icons-react"
import { sizes } from "$constants/sizes"

interface Props extends PaperProps {
  label: string
  onClick?: () => void
}

const SettingLink: FunctionComponent<Props> = ({
  label,
  onClick
}) => {
  return (
    <Paper
      onClick={onClick}
      component="button"
      withBorder={true}
      shadow="xs"
      p="xl"
      display="flex"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      <Text>{label}</Text>
      <IconChevronRight size={sizes.icon} />
    </Paper>
  )
}

export default SettingLink
