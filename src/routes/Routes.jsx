import Orders from "../components/Orders/Orders";
import Login from "../Page/Login/Login";
import Layout from "../components/Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Tables from "../components/Tables/Tables";
import Menu from "../components/Menu/Menu";
import Staffs from "../components/Staffs/Staffs";
import Statistics from "../components/Statistics/Statistics";
import Settings from "../components/Settings/Settings";
import Reviews from "../components/Reviews/Reviews";

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
