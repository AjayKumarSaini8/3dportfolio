import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Skills, Projects, StarsCanvas, Footer } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <Hero />
        <About />
        <div className='relative z-0 bg-slate-950 pb-20'>
          <Skills />
        </div>
        <Projects />
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </BrowserRouter >
  );
};

export default App;
