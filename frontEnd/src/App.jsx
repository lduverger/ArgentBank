import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/index/Index'
import SignIn from './pages/signIn/SignIn'
import User from './pages/user/User'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PrivateRoute from './components/tool/PrivateRoute'
import { useDispatch } from 'react-redux'
import { addToken, addUserInfo } from './redux/authSlice'
import { postProfile } from './redux/comAPI'
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    const handleToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(addToken(token));
        const userInfo = await postProfile(token);
        dispatch(addUserInfo(userInfo));
      }
    }

    handleToken();

  }, [])

  return (
    <BrowserRouter basename='/ArgentBank'>
      <Header />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/user' element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
