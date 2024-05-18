import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import { login, postProfile, putProfile, signUp } from '../../redux/comAPI';
import { useDispatch } from 'react-redux';
import { addToken, addUserInfo } from '../../redux/authSlice';
import { useState } from 'react';


const SignIn = () => {

  // user tony@stark.com password123
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email, password);
      dispatch(addToken(token));
      const userInfo = await postProfile(token);
      dispatch(addUserInfo(userInfo));
      navigate('/user');
      
    } catch (error) {
      console.error("Problème lors de la connexion : ", error);
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className='sign-in-icon' />
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;