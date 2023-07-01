import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { orderService } from "./orderService";

export const allAddress = createAsyncThunk("get/address", async (address, thunkAPI) => {
  try {
    return await orderService.getCoordinatesFromAddress(address);
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});
