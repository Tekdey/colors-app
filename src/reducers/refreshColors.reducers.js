const refreshReducer = (state = [], action) => {
  switch (action.type) {
    case "REFRESH":
      return action.payload;

    default:
      return state;
  }
};

export default refreshReducer;
