import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/app/layouts/RootLayout";
import App from "../App";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "@/components/Dashboard";
import Setting from "@/components/Dashboard/Setting";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import Team from "@/components/Teams/Team";
import NotFound from "@/components/Error/NotFound";
import TeamsIndex from "@/components/Teams/TeamsIndex";
import TeamsLayout from "../layouts/TeamsLayout";
import { teamsIndexLoader } from "@/components/Teams/teamsIndexLoader";
import { teamLoader } from "@/components/Teams/teamLoader";
import TeamError from "@/components/Teams/TeamError";
import TeamEdit from "@/components/Teams/TeamEdit";
import SingleProduct from "@/components/Product/SingleProduct";


export const AppRoutes = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: App
      }
    ]
  },
  {
    path: "auth",
    Component: RootLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "*", Component: NotFound } // /auth → 404
    ],
  },

  {
    Component: DashboardLayout,
    path: "dashboard",
    children: [
      { index: true, Component: Dashboard },
      { path: "setting", Component: Setting }
    ]
  },
  {
    path: "users",
    Component: TeamsLayout,
    children: [
      {
        index: true,
        loader: teamsIndexLoader,
        Component: TeamsIndex
      }, // /users

      {
        path: ":userId",
        loader: teamLoader,
        Component: Team,
        errorElement: <TeamError />
      },
      {
        path: ":userId/edit",
        Component: TeamEdit,
        errorElement: <TeamError />
      }
    ]
  },
  {
    path: "product",
    children: [
      {
        path: ":id",
        Component: SingleProduct,

      }
    ]
  },

  { path: "*", Component: NotFound }
])

