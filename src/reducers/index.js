import { applyMiddleware } from "redux";
import refresh from "./colors.reducers";

export default applyMiddleware({
  refresh,
});
