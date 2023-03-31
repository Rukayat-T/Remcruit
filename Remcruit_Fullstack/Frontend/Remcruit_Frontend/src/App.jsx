import {BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './pages/Register/Register'
import AboutUs from './pages/AboutUs/AboutUs'
import Recruiter from './pages/Recruiter/Recruiter'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/aboutus' element={<AboutUs/>}  />
        <Route path='/recruiter' element={<Recruiter/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App
