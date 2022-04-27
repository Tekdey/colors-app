import React from "react";
import { motion } from "framer-motion";
import { containerVariants, toastOptions } from "../constant";
import { copyColors } from "../utils/CopyColors";
import { toast } from "react-toastify";

const ContainerColor = ({randomHexColors, nb, delay}) => {
  return  (
    <motion.div
        className="color-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay}}
        style={{
            backgroundColor: randomHexColors[nb],
        }}
        >
        <span
            className="text-hex"
            onClick={(e) => {
            copyColors(e.target.textContent);
            toast.success("Copied : " + e.target.textContent, toastOptions);
            }}
        >
            {randomHexColors[nb]}
        </span>
    </motion.div>
)
};

export default ContainerColor;
