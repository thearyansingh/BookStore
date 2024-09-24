import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Courses from './Pages/Courses';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contact from './Pages/Contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
const App = () => {


  const [authUser,setAuthUser]=useAuth();

  const location = useLocation(); // Hook to get the current route

  // Define the routes where you want to hide Navbar and Footer
  const hideNavbarAndFooter = location.pathname === '/Signup';

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}  {/* Conditionally render Navbar */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/Signup"/>} />


          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
       
        </Routes>
        <Toaster/>
      </div>
      {!hideNavbarAndFooter && <Footer />}  {/* Conditionally render Footer */}
    </>
  );
}

export default App;
