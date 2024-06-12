import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { setLoading, setUsers, setError } = classicSlice.actions;
export default classicSlice.reducer;
