import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { brandService } from "./brandService";

export const allbrand = createAsyncThunk("get/brand", async (thunkAPI) => {
  try {
    return await brandService.getbrands();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});



const brandState = {
  brand: "",
  isError: false,
  isSuccess: false, 
  isLoading: false,
  message: ""
};

export const brandSlice = createSlice({
  name: "brand",
  initialState: brandState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allbrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allbrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brand = action.payload;
     
      })
      .addCase(allbrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export default brandSlice.reducer;
 