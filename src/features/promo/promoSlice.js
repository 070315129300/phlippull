import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { promoService } from "./promoService";

export const getAllPromo = createAsyncThunk("promo/get", async (thunkAPI) => {
  try {
    return await promoService.getPromo();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});



const promoState = {
  promo: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

export const promoSlice = createSlice({
  name: "promo",
  initialState: promoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
       .addCase(getAllPromo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPromo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.promo = action.payload;
      })
      .addCase(getAllPromo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload?.error;
      })
  },
});

export default promoSlice.reducer;
 