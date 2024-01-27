import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas, AppWrap, SocialMedia } from "./components";

const App = () => {
  const appStyle = {
    backgroundColor: "#ccd8e3", // Set the desired background color
  };

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <Hero />
        <StarsCanvas />
        <div className='relative z-0' style={appStyle}>
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
