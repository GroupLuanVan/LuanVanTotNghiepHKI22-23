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
import 'react-toastify/dist/ReactToastify.css';
import HeaderHR from "./components/JobPost/HeaderHR";
function App() {
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
              path="Home"
              element={
                <>
                  <CustomAppBar />
                   <Home /> 
                  <Footer/> 
                </>
              }
              />
               <Route
              path="/:usetemplate"
              element={
                <>
                  <HeaderCV/>
                  <ManageCV/>
                  <Footer/>
                </>
              }
              />
              <Route
              path="Login"
              element={
                <>
                  <CustomAppBar />
                   <Login /> 
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
              path="joblist"
              element={
                <>
                <CustomAppBar />
                <JobList />
                <Footer />
              </>
              }/>
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
              path="test"
              element={
                <>
                  <testPop/>
                </>
              }
              />
    

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
