import { NavbarLinkItem } from "$types/navbar"
import {
  IconHome,
  IconStack2,
  IconList,
  IconHistory,
  IconSettings
} from "@tabler/icons-react"
import { sizes } from "./sizes"

export const links: NavbarLinkItem[] = [
  {
    icon: <IconHome size={sizes.icon} />,
    color: "blue",
    label: "Home",
    path: "/"
  },
  {
    icon: <IconStack2 size={sizes.icon} />,
    color: "teal",
    label: "Subscriptions",
    path: "/subscriptions"
  },
  {
    icon: <IconList size={sizes.icon} />,
    color: "violet",
    label: "Playlists",
    path: "/playlists"
  },
  {
    icon: <IconHistory size={sizes.icon} />,
    color: "grape",
    label: "History",
    path: "/history"
  },
  {
    icon: <IconSettings size={sizes.icon} />,
    color: "gray",
    label: "Settings",
    path: "/settings"
  },
]
