import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    let token = localStorage.getItem("token");
    if(!token) token = useSelector((state) => state.auth.token);

    return token ? children : <Navigate to="/sign-in" />
};

export default PrivateRoute;