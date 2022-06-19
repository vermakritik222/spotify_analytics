import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  token_type: "",
  token_exp: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      const { token } = action.payload;
      console.log("from dispatch", { token });
      state.token = token;
      console.log(state.token);
      // state.token_type = token_type;
      // state.token_exp = token_exp;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
