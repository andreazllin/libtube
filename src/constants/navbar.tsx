import { NavbarLinkItem } from "$types/navbar"
import {
  IconHome,
  IconStack2,
  IconList,
  IconHistory,
  IconSettings
} from "@tabler/icons-react"

export const links: NavbarLinkItem[] = [
  {
    icon: <IconHome size="1rem" />,
    color: "blue",
    label: "Home",
    path: "/"
  },
  {
    icon: <IconStack2 size="1rem" />,
    color: "teal",
    label: "Subscriptions",
    path: "/subscriptions"
  },
  {
    icon: <IconList size="1rem" />,
    color: "violet",
    label: "Playlists",
    path: "/playlists"
  },
  {
    icon: <IconHistory size="1rem" />,
    color: "grape",
    label: "History",
    path: "/history"
  },
  {
    icon: <IconSettings size="1rem" />,
    color: "gray",
    label: "Settings",
    path: "/settings"
  },
]
