import React from "react";
import { useDispatch } from "react-redux";
import { deleteColor } from "../actions/colors.actions";

import {motion} from "framer-motion"

const Color = ({color}) => {

  const dispatch = useDispatch()
    
  return (
    <motion.div 
    className="text-white shadow-sm text-center flex justify-between mt-1"
    initial={{x: -100}}
    animate={{x:0 }}
    transition={{type: "spring", stiffness: "500"}}
    style={{
      backgroundColor: color
    }}>
        <span>{color}</span>
        <span onClick={() => dispatch(deleteColor(color))} className="w-20 ">❌</span>
      </motion.div>
  )
};

export default Color;
