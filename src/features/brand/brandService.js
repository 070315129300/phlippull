import axios from "axios";
import { base_url,} from "../../utils/axiosConfig";

const getbrands= async()=>{
    const response = await axios.get(`${base_url}/brand/fetchAllBrands`);
    if(response){ 
        return response;
    }
}


export const brandService ={
     getbrands
     
};  