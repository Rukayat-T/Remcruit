import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router';
// import 'font-awesome/css/font-awesome.min.css';

import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from '../src/pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import EmployerRegister from './Employer/Pages/Register/register'
import AboutUs from './Pages/AboutUs/AboutUs'
import HomePage from './Jobseeker/Pages/Home/homePage';
import JobseekerRegister from './Jobseeker/Pages/Register/Register'
import EmployerLandingPage from './Employer/Pages/Landing/LandingPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
// import Forgotpassword from './components/Forgotpassword/Forgotpassword'



function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/employer' exact element={<EmployerLandingPage />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/Forgotpassword' component={Forgotpassword } /> */}
            <Route path='/employer/register' element={<EmployerRegister />} />
            <Route element={<PrivateRoute />} >
              <Route element={<AboutUs />} path='/aboutus' />
              <Route element={<HomePage />} path='/home' />
            </Route>
            <Route path='/jobseeker/register' element={<JobseekerRegister />} />
          </Routes>
        </AuthProvider >
      </Router >

    </div >
  );
}

export default App
