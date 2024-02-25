import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register"
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home"
import Createservices from "./pages/Createservices/Createservices"
import './App.css'
import Aboutus from "./pages/about-us/Aboutus";
import UpdateProject from "./pages/UpdateProject/UpdateProject"
import UpdateServices from "./pages/UpdateServices/UpdateServices";
import CreateProject from "./pages/CreateProject/CreateProject"

// import AboutUs from "./pages/about-us/AboutUs";
// import Services from "./pages/services/Services";
// import Login from "./pages/login/Login";
// import Projects from "./pages/projects/Projects";
// import Contact from "./pages/contact/ContactDT";
// import NotFound from "./components/notfound/NotFound";

const AppRoutes = ({ toast }) => {


    return (
        <Router>
           
            <div className="container">
            <Sidebar />

                {/* <Navbar   />
                <Contact />
               <Register /> */}
                <Routes>
                    {/* <Route path="/" element={<Login   />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/services" element={<Services   />} />
                    <Route path="/projects" element={<Projects   />} />
                    <Route path="/about" element={<AboutUs   />} />
                    <Route path="/contact" element={<Contact   />} /> */}
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/services/:id" element={<UpdateServices/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/createservices" element={<Createservices/>}/>
                    <Route path="/Aboutus" element={<Aboutus/>}/>
                    <Route path="/CreateProject" element={<CreateProject/>}/>
                    <Route path="/projects/:id" element={<UpdateProject/>}/>
                    

                </Routes>
            </div>
        </Router>
    );
};

export default AppRoutes;
