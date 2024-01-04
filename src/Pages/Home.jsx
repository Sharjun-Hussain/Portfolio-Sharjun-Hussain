// import { useEffect, useState } from "react"
// import LoadingScreen from "../Components/LoadingScreen";
import { lazy ,Suspense } from "react";
import Loader from "../Components/Loader";


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

    <Suspense fallback={<Loader/>}>

      <TopNav  />
      {/* <ColouredLine color="white" /> */}
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </Suspense>
    </>
  );
};
export default Home;
