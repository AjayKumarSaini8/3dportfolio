import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, AppWrap, SocialMedia } from "./components";

const App = () => {
  const appStyle = {
    backgroundColor: "#ccd8e3", // Set the desired background color
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <StarsCanvas />
      <About />
      <Tech />
      <Works />
      <Contact />
      <SocialMedia />
      <AppWrap />
    </BrowserRouter>
  );
};

export default App;
