import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userAction";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  //* Normal senkron aksiyonları burada tanımlayabiliriz.
  reducers: {},
  //* Asenktron aksiyonları nasıl ele alınacağını tanımlamak için extraReducers kullanılır.
  extraReducers: (builder) => {
    //* getUsers aksiyonunun pending(beklemede) durumu tetiklendiğinde ne yapılacağını tanımlıyoruz.
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    //* getUsers aksiyonun rejected(reddedildi) durumu tetiklendiğinde ne yapılacağını tanımlıyoruz.
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    //* getUsers aksiyonun fulfilled (başarıyla tamamlandı) durumu tetiklendiğinde ne yapılacağını tanımlıyoruz.
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;
