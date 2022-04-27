import React, { useEffect } from "react";

const Cursor = () => {

    useEffect(() => {

        const cursor = document.getElementById('cursor')
        document.addEventListener('mousemove', (e) => {
            cursor.setAttribute('style', 'top:'+(e.pageY) + "px; left:" + (e.pageX) +"px;")
        })
    }, [])


  return <div className=" h-4 w-4 absolute rounded-full border-4 border-black z-50 shadow-2xl mix-blend-normal" id="cursor">
  </div>;
};

export default Cursor;
