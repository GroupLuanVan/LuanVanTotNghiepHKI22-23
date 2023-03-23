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
                  {/* <CustomAppBar /> */}
                   {/* <FeaturedCompanies/> */}
                   {/* <RichText/> */}
                  <ManageCV/>
                 
                  {/* <Footer/>  */}
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
              path="CreateCV"
              element={
                <>
                  <CustomAppBar />
                  <ChooseCV/>
                  <Footer/> 
                </>
              }
              />
    

    </Route>
  </Routes>
  </BrowserRouter> 
    
    </>

  );
}

export default App;
