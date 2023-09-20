import { FunctionComponent, useMemo } from "react"
import { ThemeIcon, UnstyledButton, Group, Text, CSSObject } from "@mantine/core"
import type { NavbarLinkItem as NavbarLinkItemType } from "$types/navbar"
import { useLocation, useNavigate } from "react-router-dom"

type Props = NavbarLinkItemType

const NavbarLinkItem: FunctionComponent<Props> = ({
  icon, color, label, path
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isPathOrSubpath = useMemo(() => {
    return location.pathname.split("/")[1] === path.split("/")[1]
  }, [location.pathname, path])

  return (
    <UnstyledButton
      sx={(theme): CSSObject => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        backgroundColor: isPathOrSubpath ? theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0] : undefined,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
        }

      })}
      onClick={(): void => {
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
