import { motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

type Params = {
  params: {
    scrollProgress: MotionValue<number>;
  };
};

const About = ({ params: { scrollProgress } }: Params) => {
  const ref = useRef(null);

  const opacity = useTransform(scrollProgress, [0.1, 0.25, 0.35], [0, 1, 0]);

  return (
    <motion.div
      id="About"
      className="flex justify-center items-center row p-6"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        color: "var(--accent)",
        zIndex: 5,
        overflow: "hidden",
        opacity,
      }}
    >
      <motion.div className="col-md" id="imgDiv">
        <motion.img
          ref={ref}
          src="/images/siya(no-back)-2.png"
          alt="Siya Photo"
          style={{
            width: "70vh",
            height: "70vh",
            borderRadius: "50%",
            cursor: "grab",
            margin: 0,
            padding: 0,

            zIndex: 6,
            border: ".2rem solid var(--accent)",
            alignSelf: "center",
          }}
          viewport={{ amount: "all" }}
          whileHover={{ scale: 0.95, boxShadow: "0 0 2rem var(--accent)" }}
          drag
          dragSnapToOrigin
          whileDrag={{
            cursor: "grabbing",
            scale: 0.8,
            boxShadow: "0 0 3rem var(--accent)",
          }}
          whileTap={{
            scale: 0.92,
            boxShadow: "0 0 2.5rem var(--accent)",
            transition: {
              duration: 0.5,
            },
          }}
        ></motion.img>
      </motion.div>
      <motion.div id="aboutInfo" className="col-md items-start p-2">
        <motion.h2
          initial={{
            translateY: "-10rem",
            opacity: 0,
          }}
          whileInView={{
            translateY: "0",
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          }}
        >
          About Me
        </motion.h2>
        <motion.h3
          initial={{ translateX: "-10rem", opacity: 0 }}
          whileInView={{
            translateX: "0",
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          }}
          style={{
            fontWeight: "600",
            maxWidth: "80%",
            fontSize: "1.3rem",
          }}
        >
          A versatile Fullstack Web Developer
          <br />
          ready to join your team!
          <br />
        </motion.h3>
        <motion.h3
          initial={{ translateX: "10rem", opacity: 0 }}
          whileInView={{
            translateX: "0",
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          }}
          style={{
            fontWeight: "600",
            maxWidth: "80%",
            fontSize: "1.3rem",
          }}
        >
          With over half a decade of coding experience,
          <br />I am driven to tackle complex problems and help your team reach
          new heights.
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default About;
