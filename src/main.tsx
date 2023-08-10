import React from "react"
import ReactDOM from "react-dom/client"
import Providers from "$components/Providers"
import { RouterProvider } from "react-router-dom"
import { router } from "$constants/router"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
)
