import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshColors } from "./actions/colors.actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerColor from "./components/ContainerColor";
import Title from "./components/Title";
import Cursor from "./components/Cursor";
import { motion } from "framer-motion";
import ColorSelection from "./components/ColorSelection";

const App = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const { refresh } = useSelector((state) => ({
    ...state,
  }));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    if (screenSize > 767) {
      setToggle(true);
    }
  }, [screenSize]);

  useEffect(() => {
    // refresh colors
    dispatch(refreshColors());

    function refreshFoo(event) {
      if (event.code === "Space") {
        dispatch(refreshColors());
      }
    }

    window.addEventListener("keyup", refreshFoo);
    return () => window.removeEventListener("keyup", refreshFoo);
  }, [dispatch]);

  const toggleFoo = (toggled) => {
    setToggle(toggled);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <span className="hidden md:block text-white text-2xl absolute">
        <a href="https://github.com/Tekdey/colors-app">Github</a>
      </span>
      <Cursor />
      <div className="w-screen h-screen flex justify-between flex-col items-center text-center overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <Title randomHexColors={refresh} />
          <motion.p
            className="hidden md:block lg:text-2xl sm:text-2xl text-1xl text-white drop-shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            Change colors with your space bar !
          </motion.p>

          <ColorSelection toggleFoo={toggleFoo} />
        </div>

        {toggle && (
          <>
            <div className="flex flex-col w-full h-full md:h-2/3 md:w-full md:flex-row bottom-0 md:absolute">
              <ContainerColor randomHexColors={refresh} nb={0} delay={0.1} />
              <ContainerColor randomHexColors={refresh} nb={1} delay={0.2} />
              <ContainerColor randomHexColors={refresh} nb={2} delay={0.3} />
              <ContainerColor randomHexColors={refresh} nb={3} delay={0.4} />
              <ContainerColor randomHexColors={refresh} nb={4} delay={0.5} />
            </div>
            <div>
              <button
                className=" w-screen text-white h-20 font-bold text-2xl shadow-xl md:hidden z-50"
                onClick={() => dispatch(refreshColors())}
              >
                Generate
              </button>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default App;
