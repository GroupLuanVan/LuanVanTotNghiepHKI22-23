import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
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
import { Header_CV } from "./CV/Header_CV";
import VerticalNavbar from "./components/Menu/VerticalNavbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
                   <Home /> 
                  <Footer/> 
                </>
              }
              />
               <Route
              path="/:usetemplate"
              element={
                <>
                  <Header_CV/>
                  <ManageCV/>
                  <Footer/>
                 
              
                </>
              }
              />
              <Route
              path="Dangnhap"
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
                {/* <RegisterAccount/> */}
                {/* <ChooseAccountTypeForm/> */}
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
                <CustomAppBar />
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
                  <VerticalNavbar/>
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
