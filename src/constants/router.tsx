import { createBrowserRouter } from "react-router-dom"
import Settings from "$routes/Settings"
import Layout from "$components/Layout"
import InstanceSettings from "$routes/InstanceSettings"
import Home from "$routes/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/subscriptions",
        element: <h1> Subscriptions </h1>
      },
      {
        path: "/playlists",
        element: <h1> Playlists </h1>
      },
      {
        path: "/history",
        element: <h1> History </h1>
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/settings/instance",
        element: <InstanceSettings />
      }
    ]
  },
  {
    path: "*",
    element: <h1> 404 not found </h1>,
  }
])
