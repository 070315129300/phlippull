 import axios from "axios";
import { base_url,base1_url, config} from "../../utils/axiosConfig";

const getProducts = async()=>{
    const response = await axios.get(`${base_url}/products`);
    
    if(response){ 
        return response;
    }
}

const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`${base_url}/new_product/getProduct/${id}`);
    return response.data.product;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};


const addToWishlist = async(prodId)=>{
    console.log(config);
    const response = await axios.put(`${base_url}/product/addToWishlist`, {prodId}, config);
    if(response.data){
        return response.data;
    }
}

export const productService ={
     getProducts,
     addToWishlist, 
     getSingleProduct
};  