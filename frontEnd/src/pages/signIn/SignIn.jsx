import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const SignIn = () => {
    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className='sign-in-icon'/>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <NavLink to="/user" className="sign-in-button">Sign In</NavLink>
            {
                /*
                <!-- SHOULD BE THE BUTTON BELOW -->
                <button class="sign-in-button">Sign In</button> -->
                */
            }
          </form>
        </section>
      </main>
    );
};

export default SignIn;