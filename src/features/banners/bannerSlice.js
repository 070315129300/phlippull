import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { bannerService } from "./bannerService";



export const getAllBanners= createAsyncThunk("banners/get", async(thunkAPI)=>{
    try{
        return await bannerService.getBanners();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});

const bannerState = {
    banner: "",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}



export const bannerSlice = createSlice({
    name:"banner",
    initialState: bannerState,
    reducers:{},
    extraReducers:(builder)=>{
        builder 
        .addCase(getAllBanners.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getAllBanners.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.banner = action.payload;
        })
        .addCase(getAllBanners.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            
        });
    }
})

export default bannerSlice.reducer;

