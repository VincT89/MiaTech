import { createSlice } from "@reduxjs/toolkit"; 
import { memory } from "../../utils/memory";

const auth = memory.get("auth");

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user:  auth?.user || null,
		token: auth?.token || null,
	},
	reducers: {
    login: (state, { payload })=>{
      const { accessToken, refreshToken, ...userInfo } = payload;
      state.user = userInfo;
      state.token = accessToken;

      memory.set("auth", {...state});
    },
    logout: (state)=>{
      state.user = null;
      state.token = null;

      memory.remove("auth");
    },
    
	},
});

export const {login, logout } = authSlice.actions;
export default authSlice.reducer;
