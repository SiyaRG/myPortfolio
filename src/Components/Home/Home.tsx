import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Home = () => {
  const [bannerSwitch, setBannerSwitch] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerSwitch((prev) => !prev);
      setKey((key) => key + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const bannerOne = () => {
    return (
      <>
        <motion.h2
          className="text-gray-600"
          style={{ fontSize: "1.5rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          HELLO! I'M
        </motion.h2>
        <motion.h2
          className="text-gray-400"
          style={{ fontSize: "3rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          SIYABONGA SOKO
        </motion.h2>
      </>
    );
  };
  const bannerTwo = () => {
    return (
      <>
        <motion.h2
          className="text-gray-600"
          style={{ fontSize: "1.5rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          I'M FROM SOUTH AFRICA
        </motion.h2>
        <motion.h2
          className="text-gray-400"
          style={{ fontSize: "3rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          A SOFTWARE DEVELOPER
        </motion.h2>
      </>
    );
  };
  const selectBanner = (val: boolean) => {
    if (val) {
      return bannerOne;
    } else {
      return bannerTwo;
    }
  };
  return (
    <motion.div
      key={key}
      className="w-100 h-[80vh] m-0 flex flex-col items-center justify-center"
    >
      {selectBanner(bannerSwitch)()}
    </motion.div>
  );
};

export default Home;
