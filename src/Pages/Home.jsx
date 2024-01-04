// import { useEffect, useState } from "react"
// import LoadingScreen from "../Components/LoadingScreen";
import { lazy } from "react";


const About = lazy(() => import('../Components/About'));
const Hero = lazy(() => import('../Components/Hero'));
const TopNav = lazy(() => import('../Components/NavBar'));
const Projects = lazy(() => import('../Components/Projects'));
const Contact = lazy(() => import('../Components/Contact'));

// import Contact from "../Components/Contact";
// import Hero from "../Components/Hero";
// import TopNav from "../Components/NavBar";
// import Projects from "../Components/Projects";

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
