import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { LandingPage } from "./components/LandingPage";
import {Login} from './components/Login/Login';
import Footer  from './components/AppBar/Footer';
import CustomAppBar from './components/AppBar/Header';
import RegisterOption from "./components/Login/RegisterType";
import {RegisterJobSeeker}  from './components/Login/RegisterJobSeeker';
import { RegisterEmployer } from "./components/Login/RegisterEmployer";
import { testPop } from "./components/testPop";
import PostJob from "./components/JobPost/jobPost";
import { JobList }  from "./components/JobPost/JobList";
import ComboBox from "./components/list";
import RichText from "./components/RichText";
import ManageCV from "./components/ManageCV";
import { ChooseCV } from "./CV/ChooseCV";
import HeaderCV from "./components/AppBar/HeaderCV";
import VerticalNavbar from "./components/Menu/VerticalNavbar";
import { JobListCompany } from "./components/JobPost/JobListCompany";
import { ToastContainer } from "react-toastify";
import { JobS } from "./components/Job/JobS";
import JobDetail from "./components/Job/JobDetail";
import Company from "./components/Company/Company";
import UpdateProfile from "./components/Profile/UpdateProfile";
import 'react-toastify/dist/ReactToastify.css';
import HeaderHR from "./components/JobPost/HeaderHR";
import HeaderhomeHR from "./components/JobPost/HeaderHomeHR";
import HeaderCandi from "./components/AppBar/HeaderCandi";
import HeaderAdmin from "./components/AppBar/HeaderAdmin";
import Dashboard from "./components/Admin/Admin";
import MyCV from "./components/MyCV";
import MyProfile from "./components/Profile/MyProfile";
import AppliedJobs from "./components/Profile/AppliedJobs";
import { useSelector } from "react-redux";
import LoginType from "./components/Login/LoginType";
import { LoginSeeker } from "./components/Login/LoginSeeker";
import { LoginEmployer } from "./components/Login/LoginEmploy";
import { LoginAdmin } from "./components/Login/LoginAdmin";
import { ShowCV } from "./components/Company/ShowCV";
import ViewCV from "./components/viewCV";
import { JobForYou } from "./components/JobPost/JobForYou";
import { CvForYou } from "./components/JobPost/CvForYou";
import JobDetailSimi from "./components/Job/JobDetailSimi";
import MyCompany from "./components/Profile/MyCompany";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
                

   <BrowserRouter>
  <Routes>
    <Route path="/">
        <Route index
              element={
                <>
                  <CustomAppBar />
                   <LandingPage /> 
                  <Footer/> 
                </>
              }
              />
                <Route
              path="HomeHR/*"
              element={
                <>
                  <HeaderhomeHR />
                   <LandingPage /> 
                  <Footer/> 
                </>
              }
              />
               <Route
              path="/:usetemplate"
              element={
                <>
                  <CustomAppBar/>
                  <ManageCV/>
                  <Footer/>
                </>
              }
              />
              <Route
              path="LoginType"
              element={
                <>
                  <CustomAppBar />
                   <LoginType /> 
                  <Footer/> 
                </>
              }
              />
                       <Route
              path="LoginSeeker"
              element={
                <>
                  <CustomAppBar />
                   <LoginSeeker /> 
                  <Footer/> 
                </>
              }
              />
                       <Route
              path="LoginEmployer"
              element={
                <>
                  <CustomAppBar />
                   <LoginEmployer /> 
                  <Footer/> 
                </>
              }
              />
                          <Route
              path="LoginAdmin"
              element={
                <>
                  <CustomAppBar />
                   <LoginAdmin /> 
                  <Footer/> 
                </>
              }
              />
              <Route 
              path="Rtype"
              element={
                <>
                <CustomAppBar />
                <RegisterOption />
               
                <Footer />
              </>
              }/>

              <Route 
              path="Rseeker"
              element={
                <>
                <CustomAppBar />
                <RegisterJobSeeker />
                <Footer />
              </>
              }/>

              <Route 
              path="Remployer"
              element={
                <>
                <CustomAppBar />
                <RegisterEmployer />
                <Footer />
              </>
              }/>
                <Route 
              path="jobpost"
              element={
                <>
                <HeaderHR />
                <PostJob />
                <Footer />
              </>
              }/>
                   <Route 
              path="HR/*"
              element={
                <>
                <HeaderHR />
                <PostJob />
                <Footer />
              </>
              }/>
                  <Route 
              path="joblist"
              element={
                <>
                <CustomAppBar />
                <JobList />
                <Footer />
              </>
              }/>
                  <Route
              path="updateProfile"
              element={
                <>
                  <CustomAppBar />
                  <UpdateProfile/>
                  <Footer/> 
                </>
              }
              />
                  <Route
              path="CreateCV"
              element={
                <>
                  <CustomAppBar />
                  <ChooseCV/>
                  <Footer/> 
                </>
              }
              />
                    <Route
              path="ListJob"
              element={
                <>
                  <CustomAppBar/>
                  <JobS/>
                  <Footer/>
                </>
              }
              />
                            <Route
              path="JobForYou"
              element={
                <>
                  <CustomAppBar/>
                  <JobForYou/>
                  <Footer/>
                </>
              }
              />
              {/* <Route
              path="CvForYou"
              element={
                <>
                  <CustomAppBar/>
                  <CvForYou/>
                  <Footer/>
                </>
              }
              /> */}
                     <Route
              path="JobDetail/:id"
              element={
                <>
                  <CustomAppBar/>
                  <JobDetail user={user}/>
                  <Footer/>
                </>
              }
              />
                             <Route
              path="JobDetailSimi/:id"
              element={
                <>
                  <CustomAppBar/>
                  <JobDetailSimi user={user}/>
                  <Footer/>
                </>
              }
              />
                          <Route
              path="JobDetailHR/:id"
              element={
                <>
                  <HeaderHR/>
                  <JobDetail user={user}/>
                  <Footer/>
                </>
              }
              />
                       <Route
              path="company"
              element={
                <>
                  <CustomAppBar/>
                  <Company/>
                  <Footer/>
                </>
              }
              />
                        <Route
              path="admin/*"
              element={
                <>
                  <HeaderAdmin/>
                  <Dashboard/>
                  
                </>
              }
              />
                           <Route
              path="/MyCV"
              element={
                <>
                  <CustomAppBar/>
                  <MyCV/>
                  <Footer/>
                </>
              }
              />

<Route
              path="viewcv/:id"
              element={
                <>
                  <CustomAppBar />
                  <ViewCV user={user} />
                  <Footer />
                </>
              }
            />
                               <Route
              path="/MyProfile"
              element={
                <>
                  <CustomAppBar/>
                  <MyProfile/>
                  <Footer/>
                </>
              }
              />
                                 {/* <Route
              path="HR/MyCompany"
              element={
                <>
                  <HeaderHR/>
                  <MyCompany/>
                  <Footer/>
                </>
              }
              /> */}

<Route
              path="appliedjobs"
              element={
                <>
                  <CustomAppBar />
                  <AppliedJobs  />
                  <Footer />
                </>
              }
            />v
         
    

    </Route>
  </Routes>
  </BrowserRouter> 
  <ToastContainer
        color="success"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    
    </>

  );
}

export default App;
