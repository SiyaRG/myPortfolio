import linkedIn from "../../../public/icons/linkedin-plain.svg";
import hackerRank from "../../../public/icons/hackerrank-4.svg";
import gitHub from "../../../public/icons/github-original.svg";
import { motion } from "framer-motion";
const HomeInfo = () => {
  const lI = () => {
    window.location.href =
      "https://www.linkedin.com/in/siyabonga-soko-6189a0275";
  };
  const gH = () => {
    window.location.href = "https://www.github.com/SiyaRG";
  };
  const hR = () => {
    window.location.href =
      "https://www.hackerrank.com/profile/siyabongafikcur1";
  };
  const infoVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 2,
        delay: 0,
      },
    },
  };
  const infoChildVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      style={{ zIndex: 2 }}
      variants={infoVariants}
      initial="hidden"
      animate="show"
      className="container-fluid flex justify-center items-center m-3 text-center col-md info w-100"
    >
      <motion.h1
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0,
            },
          },
        }}
        className="greet"
      >
        Hi there,
      </motion.h1>
      <motion.h1 variants={infoChildVariants}>I'm Siya...</motion.h1>
      <motion.h1 variants={infoChildVariants}>
        Your New <span className="webDev">Web Developer!</span>
      </motion.h1>
      <motion.div variants={infoVariants}>
        <motion.img
          variants={infoChildVariants}
          style={{ cursor: "pointer" }}
          whileHover={{
            rotateX: "30deg",
            boxShadow: "0 0 .5rem var(--accent)",
          }}
          whileTap={{ scale: 1.05 }}
          src={linkedIn}
          alt="LinkedIn"
          onClick={lI}
        />
        <motion.img
          variants={infoChildVariants}
          style={{ cursor: "pointer" }}
          whileHover={{
            rotateX: "30deg",
            boxShadow: "0 0 .5rem var(--accent)",
          }}
          whileTap={{ scale: 1.05 }}
          src={hackerRank}
          alt="HackerRank"
          drag
          dragConstraints={{
            top: -125,
            left: -125,
            right: 125,
            bottom: 125,
          }}
          dragTransition={{ bounceDamping: 20 }}
          dragMomentum={true}
          dragElastic={1}
          dragSnapToOrigin
          onClick={hR}
        />
        <motion.img
          variants={infoChildVariants}
          style={{ cursor: "pointer" }}
          whileHover={{
            rotateX: "30deg",
            boxShadow: "0 0 .5rem var(--accent)",
          }}
          whileTap={{ scale: 1.05 }}
          src={gitHub}
          alt="GitHub"
          onClick={gH}
        />
      </motion.div>
      <br />
    </motion.div>
  );
};

export default HomeInfo;
