import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/app/layouts/RootLayout";
import App from "../App";
import DashboardLayout from "../layouts/DashboardLayout";

export const AppRoutes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />
      }

    ]
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: "dashboard" }

    ]
  }


])

