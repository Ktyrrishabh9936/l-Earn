import React from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      <h1 style={{ display: "inline-block", margin: "0 5px" }}>Hello,</h1>
      <motion.h1
        style={{ display: "inline-block", margin: "0 5px" }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        World!
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedText;
