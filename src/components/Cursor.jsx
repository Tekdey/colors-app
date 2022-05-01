import React, { useEffect, useState } from "react";

const Cursor = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth)


    useEffect(() => {
        const body = document.body
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })

        
        if(screenSize > 767) {
          body.style.cursor = "none"
          const cursor = document.getElementById('cursor')
            document.addEventListener('mousemove', (e) => {
            cursor.setAttribute('style', 'top:'+(e.pageY) + "px; left:" + (e.pageX) +"px;")
        })
        }else{
            body.style.cursor = "default"
        }

    }, [screenSize])
    
  return screenSize > 767 && (<div className=" h-4 w-4 absolute rounded-full border-4 border-black z-50 shadow-2xl mix-blend-normal" id="cursor">
  </div>);
};

export default Cursor;
