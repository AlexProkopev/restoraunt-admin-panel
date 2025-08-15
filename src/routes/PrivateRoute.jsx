import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAutorization } from "../redux/authentification/authentication.selectors";
import { LOGIN_PAGE } from "./Routes";

const PrivateRoute = ({ children, navigateTo = LOGIN_PAGE }) => {
  const isAuth = useSelector(selectIsAutorization);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={navigateTo} state={{ from: location }} replace />;
  }
  return children; 
};

export default PrivateRoute;
