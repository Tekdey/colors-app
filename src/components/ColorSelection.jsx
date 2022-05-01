import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastOptions } from "../constant";
import { copyAllColors } from "../utils/CopyAllColors";
import Color from './Color'
import Menu from "../assets/menu.svg"

const SelectColors = ({toggleFoo}) => {

  const [toggle, setToggle] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const {select} = useSelector((state) => ({
    ...state
  }))

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    })
    if(screenSize > 767){
      setToggle(false)
    }
  }, [screenSize])


  return (
    <>
        <div className="md:hidden" onClick={() => {
          setToggle((_) => !_);
          toggleFoo(toggle)
          }}>
          <img src={Menu} alt="Menu" />
        </div>
        
        {screenSize > 767 && (
          <>
          <div className="flex justify-center items-center flex-col max-h-96">
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
          <div 
          className="z-10 w-screen md:w-56  h-full  md:max-h-[90px] m-5 flex flex-col shadow-lg rounded-lg overflow-y-scroll overflow-x-hidden"
          >
            {select.map((color, index) => {
              return <Color key={index} color={color}/>
            })}
          </div>
          </div>
          </>
          )}
        
        
        
              {toggle && (<>
                <div className="flex justify-center items-center flex-col max-h-96">
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
                <div 
                className="z-10 w-screen md:w-56  h-full md:max-h-56  lg:max-h-[90px] m-5 flex flex-col shadow-lg rounded-lg overflow-y-scroll overflow-x-hidden"
                >
                  {select.map((color, index) => {
                    return <Color key={index} color={color}/>
                  })}
                </div>
                </div>
                </>)}
                
      </>
  )
};

export default SelectColors;
