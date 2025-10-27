import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import productsReducer from "./features/productsSlice";


export default configureStore({
	reducer: {
		auth: authReducer,
		products: productsReducer,
	},
});
