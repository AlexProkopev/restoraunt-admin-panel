import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAutorization } from "../redux/authentification/authentication.selectors";
import { HOME_PAGE } from "./Routes";

const RestrictedRoute = ({ children, navigateTo = HOME_PAGE }) => {
  const authentification = useSelector(selectIsAutorization);
  const location = useLocation();

  if (authentification) {
    const from = location.state?.from?.pathname || navigateTo;
    return <Navigate to={from} replace />;
  }

  return children;
};

export default RestrictedRoute;
