import Navbar from "./components/Navbar";
import "./styles/rootStyles/main.scss";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Faq />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
