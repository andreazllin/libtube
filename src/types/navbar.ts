import { MantineColor } from "@mantine/core"
import { ReactNode } from "react"

export type NavbarLinkItem = {
  icon: ReactNode
  color: MantineColor
  label: string
  path: string
}
