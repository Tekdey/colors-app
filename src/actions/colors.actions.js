import { randomColors } from "../utils/RandomColors";

export const refresh = () => (dispatch) => {
  let newArray = [];

  for (let i = 0; i < 5; i++) {
    newArray.push(randomColors());
  }
  dispatch({
    type: "REFRESH",
    payload: newArray,
  });
};

export const colorSelection = (color) => (dispatch) => {
  dispatch({
    type: "SELECT",
    payload: color,
  });
};

export const deleteColor = (color) => (dispatch) => {
  dispatch({
    type: "DELETE",
    payload: color,
  });
};
