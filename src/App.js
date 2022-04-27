import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./actions/colors.actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerColor from "./components/ContainerColor";
import Title from "./components/Title";
import Cursor from "./components/Cursor";
import { motion } from "framer-motion";
import ColorSelection from "./components/ColorSelection";

const App = () => {
  const dispatch = useDispatch();

  const randomHexColors = useSelector((state) => ({
    // Todo refresh
    ...state.refresh,
  }));

  useEffect(() => {
    // refresh colors
    dispatch(refresh());

    function refreshFoo(event) {
      if (event.code === "Space") {
        dispatch(refresh());
      }
    }

    window.addEventListener("keyup", refreshFoo);
    return () => window.removeEventListener("keyup", refreshFoo);
  }, [dispatch]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <span className="text-white text-2xl absolute">
        <a href="https://github.com/Tekdey/colors-app">Github</a>
      </span>
      <Cursor />
      <div className="w-screen h-screen flex justify-between flex-col items-center text-center overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <Title randomHexColors={randomHexColors} />
          <motion.p
            className="lg:text-2xl sm:text-2xl text-1xl text-white drop-shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            Change colors with your space bar !
          </motion.p>

          <ColorSelection />
        </div>
        <div className="flex md:h-2/3 md:w-full md:flex-row flex-col w-full">
          <ContainerColor
            randomHexColors={randomHexColors}
            nb={0}
            delay={0.1}
          />
          <ContainerColor
            randomHexColors={randomHexColors}
            nb={1}
            delay={0.2}
          />
          <ContainerColor
            randomHexColors={randomHexColors}
            nb={2}
            delay={0.3}
          />
          <ContainerColor
            randomHexColors={randomHexColors}
            nb={3}
            delay={0.4}
          />
          <ContainerColor
            randomHexColors={randomHexColors}
            nb={4}
            delay={0.5}
          />
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default App;
