import Navbar from "./components/Navbar";
import "./styles/rootStyles/main.scss";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
