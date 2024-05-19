import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    let token = useSelector((state) => state.auth.token);
    
    if(!token)  token = localStorage.getItem("token");

    return token ? children : <Navigate to="/sign-in" />
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default PrivateRoute;