import { motion } from "framer-motion";
import siyaImage from "../../images/siyaNewBack.jpg";

const About = () => {
  return (
    <motion.div className="h-[100vh] w-100 grid grid-cols-1 md:grid-cols-2">
      <motion.div className="flex justify-center p-5">
        <motion.img
          src={siyaImage}
          className="h-100 w-100 bg-slate-300"
          initial={{ translateX: "-10rem" }}
          whileInView={{ translateX: 0 }}
          style={{ opacity: 0.8 }}
        />
      </motion.div>
      <motion.div className="h-100">AWE</motion.div>
    </motion.div>
  );
};
export default About;
