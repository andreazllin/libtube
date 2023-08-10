import { createBrowserRouter } from "react-router-dom"
import Settings from "$routes/Settings"
import Layout from "$components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1> Hello World </h1>
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
      }
    ]
  },
  {
    path: "*",
    element: <h1> 404 not found </h1>,
  }
])
