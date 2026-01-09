import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/app/layouts/RootLayout";
import App from "../App";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "@/Components/Dashboard";
import Setting from "@/Components/Dashboard/Setting";
import Login from "@/Components/Auth/Login";
import Register from "@/Components/Auth/Register";
import Team from "@/Components/Teams/Team";
import NotFound from "@/Components/Error/NotFound";
import TeamsIndex from "@/Components/Teams/TeamsIndex";
import TeamsLayout from "../layouts/TeamsLayout";
import { teamsIndexLoader } from "@/Components/Teams/teamsIndexLoader";
import { teamLoader } from "@/Components/Teams/teamLoader";
import TeamError from "@/Components/Teams/TeamError";
import TeamEdit from "@/Components/Teams/TeamEdit";


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

  { path: "*", Component: NotFound }
])

