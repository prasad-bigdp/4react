import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./reducer"
const store = configureStore({
	reducer: {
		counter: mainReducer,
	},
})
export default store