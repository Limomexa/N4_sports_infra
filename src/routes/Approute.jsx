import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Service";
import WhyChooseUs from "../components/section/WhyChooseUs";
import ConstructionProcess from "../components/section/ConstructionProcess";
import Portfolio from "../pages/projects";
import CallToAction from "../components/section/CallToAction";
import Testimonials from "../components/section/testimonials";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

function Approute() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div>
          <ConstructionProcess />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <CallToAction />
        </div>
        {/* <div>
          <Testimonials />
        </div> */}
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default Approute;
