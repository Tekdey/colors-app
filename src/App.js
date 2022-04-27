import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./actions/colors.actions";

const App = () => {
  const dispatch = useDispatch();

  const randomHexColors = useSelector((state) => state);
  console.log(randomHexColors);
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        dispatch(refresh());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-between items-center text-center bg-black">
        <h1 className="text-bold text-8xl text-white w-full">
          Humm... COLORS ! 😲
        </h1>
        <p className="text-bold text-2xl text-white w-98">
          Change colors with your space bar !
        </p>
        <div className="flex h-2/3 w-full ">
          <div
            className="h-full w-1/5 flex justify-center items-end pb-10"
            style={{
              backgroundColor: randomHexColors[0],
            }}
          >
            <span className="text-white">{randomHexColors[0]}</span>
          </div>
          <div
            className="h-full w-1/5 bg-red-900 flex justify-center items-end pb-10"
            style={{
              backgroundColor: randomHexColors[1],
            }}
          >
            <span className="text-white">{randomHexColors[1]}</span>
          </div>
          <div
            className="h-full w-1/5 bg-orange-900 flex justify-center items-end pb-10"
            style={{
              backgroundColor: randomHexColors[2],
            }}
          >
            <span className="text-white">{randomHexColors[2]}</span>
          </div>
          <div
            className="h-full w-1/5 bg-blue-900 flex justify-center items-end pb-10"
            style={{
              backgroundColor: randomHexColors[3],
            }}
          >
            <span className="text-white">{randomHexColors[3]}</span>
          </div>
          <div
            className="h-full w-1/5 bg-yellow-900 flex justify-center items-end pb-10"
            style={{
              backgroundColor: randomHexColors[4],
            }}
          >
            <span className="text-white">{randomHexColors[4]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
