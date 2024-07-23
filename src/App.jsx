import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Feature from "./components/Features"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import ServicePage from "./components/ServicePage"
import MainPage from "./components/MainPage"
import { Routes, Route, Router } from 'react-router-dom';
import { service } from './components/data';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// import Banner from "./components/Banner/Banner.jsx";
// import AppStore from "./components/AppStore/AppStore.jsx";
// import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
// import Testimonial from "./components/Testimonial/Testimonial.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cleaningService/:id' element={<ServicePage content={service} />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;