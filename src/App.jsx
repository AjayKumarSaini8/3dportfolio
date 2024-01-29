import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter >
  );
};

export default App;
