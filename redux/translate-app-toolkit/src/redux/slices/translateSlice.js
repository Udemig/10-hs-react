import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  answer: "",
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.answer = "";
    });
    builder.addCase(translateText.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(translateText.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = null;
      console.log(action);
      state.answer = action.payload.translatedText;
    });
  },
});
export default translateSlice.reducer;
