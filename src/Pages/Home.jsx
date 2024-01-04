// import { useEffect, useState } from "react"
// import LoadingScreen from "../Components/LoadingScreen";

import About from "../Components/About";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import TopNav from "../Components/NavBar";
import Projects from "../Components/Projects";

// import ColouredLine from "../Utilities/ColouredLine";

const Home = () => {
  return (
    <>
      <TopNav  />
      {/* <ColouredLine color="white" /> */}
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
};
export default Home;
