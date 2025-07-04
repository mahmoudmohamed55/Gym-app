import { useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import OurPrograms from "./components/Our Programs/Our-Programs";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonials/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import WhyYouChooseUs from "./components/ChooseUs/ChooseUs";
import Membership from "./components/Membership/Membership";
import Up from "./components/Up";
import GetStarted from "./components/getStarted/GetStarted";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Landing />
      <OurPrograms />
      <About />
      <WhyYouChooseUs />
      <Contact />
      <Membership />
      <GetStarted />
      <Testimonial />
      <Up />
      <Footer />
    </>
  );
}

export default App;
