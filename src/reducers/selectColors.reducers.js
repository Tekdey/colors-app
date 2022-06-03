const INITIAL_STATE = [];
const INIT_STATE_BY_LOCAL = localStorage.getItem("colors")?.split(",");

const selectColors = (
  state = INITIAL_STATE.length >= 0
    ? INIT_STATE_BY_LOCAL || INITIAL_STATE
    : INITIAL_STATE,
  action
) => {
  localStorage.setItem(
    "first",
    "thank for using my website, if you like it please star my repo on github <3"
  );

  localStorage.setItem("colors", state);

  switch (action.type) {
    case "SELECT":
      const existingColor = [...state].find(
        (color) => color === action.payload
      );
      if (existingColor) {
        return [...state];
      } else {
        const local = localStorage.getItem("colors")?.split(",");
        if (local) {
          if (local[0] === "") {
            if (local.length >= 1) {
              local.shift();
            }
          }
        }
        return [...(local || state), action.payload];
      }
    case "DELETE":
      const newArr = [...state];
      const arrFiltered = newArr.filter((color) => color !== action.payload);

      localStorage.setItem("colors", state.length >= 0 && arrFiltered);
      return arrFiltered;

    default:
      return state;
  }
};
export default selectColors;
