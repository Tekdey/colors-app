import React, { useEffect } from "react";

const Cursor = () => {

    useEffect(() => {

        const cursor = document.getElementById('cursor')
        document.addEventListener('mousemove', (e) => {
            cursor.setAttribute('style', 'top:'+(e.pageY) + "px; left:" + (e.pageX) +"px;")
        })
    }, [])


  return <div className=" h-10 w-10 absolute rounded-full border z-10" id="cursor"></div>;
};

export default Cursor;
