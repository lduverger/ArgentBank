import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/images/argentBankLogo.png"

const Header = () => {

    const isConnected = false;

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
                isConnected ?
                    <div>
                        <NavLink className="main-nav-item" to="/user">
                        <FontAwesomeIcon icon={faCircleUser} />
                            Tony
                        </NavLink>
                        <NavLink className="main-nav-item" to="/">
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