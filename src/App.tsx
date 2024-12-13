import "animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Pageload from "./Components/Pageload.tsx";

import "./Portfolio.css";

import About from "./Components/About/About.tsx";
import Experience from "./Components/Experience/Experience.tsx";
import Projects from "./Components/Projects/Projects.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, Suspense } from "react";

const Home = React.lazy(() => import("./Components/Home/Home.tsx"));
const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgb(0,0,0)",
      "rgb(29, 40, 52)",
      "rgb(0,0,0)",
      "rgb(29, 40, 52)",
      "rgb(0,0,0)",
    ]
  );
  return (
    <>
      <motion.div
        ref={ref}
        id="main"
        style={{
          background: background,
          scrollSnapType: "y mandatory",
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <Suspense fallback={<Pageload />}>
          <Home />
        </Suspense>
        <About params={{ scrollProgress: scrollYProgress }} />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
};

export default App;
