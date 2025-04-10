import { createStore } from "redux";
import basicReducer from "./reducers";

const myStore = createStore(basicReducer);
export default myStore