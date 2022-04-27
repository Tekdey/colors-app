const selectColors = (state = [], action) => {
  switch (action.type) {
    case "SELECT":
      const existingColor = [...state].find(
        (color) => color === action.payload
      );
      if (existingColor) {
        return [...state];
      } else {
        return [...state, action.payload];
      }

    case "DELETE":
      const newArr = [...state];
      return newArr.filter((color) => color !== action.payload);
    default:
      return state;
  }
};
export default selectColors;
