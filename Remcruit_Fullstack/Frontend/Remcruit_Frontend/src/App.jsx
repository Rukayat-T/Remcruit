import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import EmployerRegister from './Employer/Pages/Register/register'
import AboutUs from './Pages/AboutUs/AboutUs'
import JobseekerRegister from './Jobseeker/Pages/Register/Register'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        {/* {<Home />} */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employer/register' element={<EmployerRegister />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/jobseeker/register' element={<JobseekerRegister />} />
        </Routes>
      </Router>
      <h1>app</h1>
    </div>
  );
}

export default App
