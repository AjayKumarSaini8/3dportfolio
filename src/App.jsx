import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <Navbar />
        <Hero />
        <div className='relative z-0 bg-[#ccd8e3]' >
          <About />
          <Tech />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
