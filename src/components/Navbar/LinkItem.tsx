import { FunctionComponent } from "react"
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core"
import type { NavbarLinkItem as NavbarLinkItemType } from "$types/navbar"
import { useLocation, useNavigate } from "react-router-dom"

type Props = NavbarLinkItemType

const NavbarLinkItem: FunctionComponent<Props> = ({
  icon, color, label, path
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: location.pathname === path ? theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0] : undefined,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

      })}
      onClick={() => {
        navigate(path)
      }}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

export default NavbarLinkItem
