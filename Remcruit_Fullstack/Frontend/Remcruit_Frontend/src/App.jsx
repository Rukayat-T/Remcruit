import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router';
import LandingPage from './pages/LandingPage/LandingPage'
import Login from '../src/pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import EmployerRegister from './Employer/Pages/Register/register'
import AboutUs from './Pages/AboutUs/AboutUs'
import JobseekerRegister from './pages/Register'
import { AuthProvider } from './context/AuthContext';
import LoginForm from './pages/components/LoginForm/LoginForm';
import PrivateRoute from './utils/PrivateRoute';
// import Forgotpassword from './Pages/Forgotpassword/Forgotpassword';
// import PasswordReset from './pages/PasswordReset/PasswordReset';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider> 
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          
          {/* <Route path = '/forgotpassword' element={<Forgotpassword />} />
          <Route path = '/passwordreset' element={<PasswordReset />} />  */}
          <Route path='/employer/register' element={<EmployerRegister />} />
          <Route element = {<PrivateRoute/>} >
            <Route element = {<AboutUs/>} path='/aboutus'/>
          </Route>
          <Route path='/jobseeker/register' element={<JobseekerRegister />} />
        </Routes>
        </AuthProvider>   
      </Router>
      
    </div>
  );
}

export default App
