import React from "react";
import { motion }from "framer-motion"
import { titleVariants } from "../constant";
import { randomEmoji } from "../utils/RandomEmoji";

const Title = ({randomHexColors}) => {
  return <motion.h1
  className="text-bold text-white w-full drop-shadow-lg flex justify-center lg:text-8xl sm:text-6xl text-4xl "
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
>
  Humm...
  <span
    className="flex"
    style={{
      color: randomHexColors[Math.floor(Math.random() * 5)],
    }}
  >
    <motion.div
      variants={titleVariants}
      whileHover="hover"
      transition="spring_effect"
    >
      C
    </motion.div>
    <motion.div
      variants={titleVariants}
      whileHover="hover"
      transition="spring_effect"
    >
      O
    </motion.div>
    <motion.div
      variants={titleVariants}
      whileHover="hover"
      transition="spring_effect"
    >
      L
    </motion.div>
    <motion.div
      variants={titleVariants}
      whileHover="hover"
      transition="spring_effect"
    >
      O
    </motion.div>
    <motion.div
      variants={titleVariants}
      whileHover="hover"
      transition="spring_effect"
    >
      R
    </motion.div>
    <motion.div
      variants={titleVariants}
      whileHover="hover"
      transition="spring_effect"
    >
      S
    </motion.div>
  </span>
  ! {randomEmoji()}
</motion.h1>
};

export default Title;
