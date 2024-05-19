import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/images/argentBankLogo.webp"
import { useDispatch, useSelector } from "react-redux";
import { removeState } from "../../redux/authSlice";

const Header = () => {
    const token = useSelector(state => state.auth.token);
    const userName = useSelector(state => state.auth.user?.userName);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(removeState());
        localStorage.removeItem("token");
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {
                token ?
                    <div>
                        <NavLink className="main-nav-item" to="/user">
                            <FontAwesomeIcon icon={faCircleUser} />
                            {userName}
                        </NavLink>
                        <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                            <FontAwesomeIcon icon={faRightFromBracket} />                            Sign Out
                        </NavLink>
                    </div>
                    :
                    <div>
                        <NavLink className="main-nav-item" to="/sign-in">
                            <FontAwesomeIcon icon={faCircleUser} />
                            Sign In
                        </NavLink>
                    </div>
            }
        </nav>
    );
};

export default Header;