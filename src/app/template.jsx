"use client";
import { motion } from "framer-motion";

const Template = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
