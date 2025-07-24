import Orders from "../Components/Orders/Orders";

import Login from "../Page/Login/Login";
import Layout from "../Components/Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Tables from "../Components/Tables/Tables";
import Menu from "../Components/Menu/Menu";
import Staffs from "../Components/Staffs/Staffs";
import Statistics from "../Components/Statistics/Statistics";
import Settings from "../Components/Settings/Settings";
import Reviews from "../Components/Reviews/Reviews";

export const LOGIN_PAGE = "/login";
export const ORDERS_PAGE = "/orders";
export const TABLES_PAGE = "/tables";
export const MENU_PAGE = "/menu";
export const STAFF_PAGE = "/staff";
export const REVIEWS_PAGE = "/reviews";
export const STATISTICS_PAGE = "/stats";
export const SETTINGS_PAGE = "/settings";
export const HOME_PAGE = "/";

export const ROUTES = [
  {
    path: LOGIN_PAGE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: HOME_PAGE,
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [

      { index: true, element: <Orders /> },
      { path: "orders", element: <Orders /> },
      { path: "tables", element: <Tables /> },
      { path: "menu", element: <Menu /> },
      { path: "staff", element: <Staffs /> },
      { path: "stats", element: <Statistics /> },
      { path: "reviews", element: <Reviews /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];
