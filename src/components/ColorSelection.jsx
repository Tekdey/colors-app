import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastOptions } from "../constant";
import { copyAllColors } from "../utils/CopyAllColors";
import Color from './Color'

const SelectColors = () => {

  const {select} = useSelector((state) => ({
    ...state
  }))
  // const copyList = JSON.stringify(select)
  // console.log(copyList.replaceAll(',', '').replaceAll('"', " "));

  return (
    <div className="flex justify-center items-center flex-col">
      <div 
      className="z-10 w-56  max-h-64 md:max-h-56  lg:max-h-[90px] m-5 flex flex-col shadow-lg rounded-lg overflow-y-scroll overflow-x-hidden"
      >
        {select.map((color, index) => {
          return <Color key={index} color={color}/>
        })}
      </div>
      {
        select.length > 0 && (
          <div 
          className="text-white"
          onClick={() => {copyAllColors(select); toast.success("List copied 👍", toastOptions)}}
          >
           clic <b>here</b> to copy all colors in your list 🎉
         </div>
        )
      }
      </div>
  )
};

export default SelectColors;
