import { motion } from "framer-motion";
import Cards from "./Experience.json";
import Card from "./Card.tsx";

const Experience = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <div
      id="Experience"
      style={{ height: "100vh" }}
      className="flex flex-col justify-center items-center"
    >
      <motion.h1>Tech Stack</motion.h1>
      <motion.div
        id="exGrid"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-4 gap-10 px-6"
        style={{ height: "10rem" }}
      >
        {(() => {
          return Cards.map((card) => {
            return <Card stArr={{ vals: card }} />;
          });
        })()}
      </motion.div>
    </div>
  );
};

export default Experience;
