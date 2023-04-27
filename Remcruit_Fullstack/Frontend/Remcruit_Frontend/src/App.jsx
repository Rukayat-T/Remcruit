import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router';
// import 'font-awesome/css/font-awesome.min.css';

// import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from '../src/pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import EmployerRegister from './Employer/Pages/Register/register';
import AboutUs from './pages/AboutUs/AboutUs'
import HomePage from './Jobseeker/Pages/Home/homePage';
import JobseekerRegisterpage2 from './Jobseeker/Pages/Registerpage2/Registerpage2'
// import JobseekerRegisterpage3 from './Jobseeker/Pages/Registerpage3/Registerpage3'
import JobseekerRegister from './Jobseeker/Pages/Register/Register'
import EmployerLandingPage from './Employer/Pages/Landing/LandingPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import JobApplication from './Jobseeker/Pages/JobApplication/components/JobApplication';
import JobPostSummary from './Employer/Pages/jobPostSummary/JobPostSummary';
import { JobSeekerProvider } from './context/JobSeekerContext';
// import Forgotpassword from './pages/Forgotpassword/Forgotpassword'
// import Checkemail from './pages/checkemail/Checkemail';


import { FormProvider } from './context/FormContext';
import JobPost from './Employer/Pages/JobPost/components/JobPost';
import { CompanyProvider } from './context/CompanyContext';
import Profile from './Jobseeker/Pages/Profile/Profile';
import Dashboard from './Employer/Pages/dashboard/Dashboard';
import SpecificJobs from './Jobseeker/Pages/Specific Jobs Page/SpecificJobs';
// import Forgotpassword from './components/Forgotpassword/Forgotpassword'



function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <FormProvider>
            <JobSeekerProvider>
              <Routes>
                <Route path='/' exact element={<LandingPage />} />
                <Route path='/employer' exact element={<EmployerLandingPage />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/Forgotpassword' element={<Forgotpassword />} />  */}
                {/* <Route path='/Checkemail' component={<Checkemail />} />  */}
                <Route path='/employer/register' element={<EmployerRegister />} />
                <Route element={<PrivateRoute />} >
                  {/* <Route element={<AboutUs />} path='/aboutus' /> */}
                  <Route element={<HomePage />} path='/home' />
                  <Route element={<JobApplication />} path='/jobapplication' />
                  <Route element={<JobPostSummary />} path='employer/job/post/summary' />
                </Route>
                <Route path='/jobseeker/register' element={<JobseekerRegister />} />
                <Route path='/employer/job/post' element={<JobPost />} />
                <Route path='/aboutus' element={<AboutUs />} />
              </Routes>

              <CompanyProvider>
                <Routes>
                  <Route path='/' exact element={<LandingPage />} />
                  <Route path='/employer' exact element={<EmployerLandingPage />} />
                  <Route path='/login' element={<Login />} />
                  {/* <Route path='/Forgotpassword' component={Forgotpassword } /> */}
                  <Route path='/employer/register' element={<EmployerRegister />} />
                  <Route element={<PrivateRoute />} >
                    <Route element={<AboutUs />} path='/aboutus' />
                    <Route element={<HomePage />} path='/home' />
                    <Route element={<JobApplication />} path='/jobapplication' />
                    <Route element={<Profile />} path='/profile' />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route element={<SpecificJobs/>} path='/specificjobs'/>  

                  </Route>
                  <Route path='/jobseeker/register' element={<JobseekerRegister />} />
                  <Route path='/employer/job/post' element={<JobPost />} />
                </Routes>
              </CompanyProvider>

            </JobSeekerProvider>
          </FormProvider>
        </AuthProvider >
      </Router >

    </div >
  );
}

export default App
