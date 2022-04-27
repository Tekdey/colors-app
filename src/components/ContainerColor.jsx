import React from "react";
import { motion } from "framer-motion";
import { containerVariants, toastOptions } from "../constant";
import { copyColors } from "../utils/CopyColors";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { colorSelection } from "../actions/colors.actions";

const ContainerColor = ({randomHexColors, nb, delay}) => {

    const dispatch = useDispatch()

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
        onClick={() => dispatch(colorSelection(randomHexColors[nb]))}
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
