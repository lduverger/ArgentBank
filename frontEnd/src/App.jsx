import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/index/Index'
import SignIn from './pages/signIn/SignIn'
import User from './pages/user/User'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <BrowserRouter basename='/ArgentBank'>
      <Header />
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
