"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay: number;
};

const fadeInUpwards = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    damping: 25,
    stiffness: 100,
    duration: 0.3,
  },
};

export default function Motion({ children, delay }: Props) {
  return (
    <motion.div
      variants={fadeInUpwards}
      initial="initial"
      animate="animate"
      transition={{ ...fadeInUpwards.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
