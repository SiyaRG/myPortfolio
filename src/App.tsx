import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Pageload from "./Components/Pageload.tsx";

import "./Portfolio.css";
import siyaImage from "./images/siya(no-back)-2.png";
import About from "./Components/About/About.tsx";
import Experience from "./Components/Experience/Experience.tsx";
import Projects from "./Components/Projects/Projects.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Components/Home/Home.tsx"));
const App = () => {
  const { scrollYProgress } = useScroll();

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
        id="main"
        style={{
          background: background,
          scrollSnapType: "y mandatory",
          overflowX: "hidden",
          overflowY: "auto",

          maxWidth: "100vw",
        }}
      >
        <motion.header className="w-[100vw] h-[20vh] flex p-10 px-14 sticky">
          <motion.div className="flex items-center">
            <motion.img
              className="w-16 h-16 rounded-full bg-slate-100 m-2"
              src={siyaImage}
            />
            <motion.h1 style={{ fontSize: "1.8rem" }} className="text-gray-400">
              SIYABONGA SOKO
            </motion.h1>
          </motion.div>
          <motion.div></motion.div>
        </motion.header>
        <Suspense fallback={<Pageload />}>
          <Home />
        </Suspense>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
};

export default App;
