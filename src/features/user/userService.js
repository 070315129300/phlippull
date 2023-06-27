import axios from "axios";
import { base_url,base1_url, config} from "../../utils/axiosConfig";

const register = async (userData) => {
  try {
    console.log(userData);
    const response = await axios.post(
      `https://app.shop4me.online/register`,
      userData
    );
    
    if (response) {
      localStorage.setItem("customer", JSON.stringify(response.data));
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error("Registration failed:", error.response.data);
    // Handle the error here, show an error message, etc.
    // You can access the error response using `error.response.data`
  }
};
 

const login = async(usersData)=>{
    const response = await axios.post(`${base_url}/login`,usersData);
    if(response){
         localStorage.setItem("customer", JSON.stringify(response));
                  console.log("LoginData", response);

        return response;
    }
}

const getUserWishlist = async () => {
    const response=await axios.get(`${base_url}/addToWishlist`, config);
    if(response.data){
      return response.data;  
    }
}

// const addToCart = async (cartData) => {
//   console.log(cartData);
//   console.log("found apikey")
//   console.log(config);
//   const response = await axios.post(`https://app.shop4me.online/bag/addToBag`, { data: cartData }, config);
//   if (response) {
//     console.log(response)
//     return response;
//   }
// };

const addToCart = async (cartData, apiKey) => {
  console.log(apiKey);

  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      "https://app.shop4me.online/bag/addToBag",
      { data: cartData },
      config
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};


// const getCart = async (cartData, apiKey) => {
//   console.log(config);
//   console.log('cayleb');
//   console.log(apiKey);

//   const config = {
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const response = await axios.post(
//       "https://app.shop4me.online/view_bag",
//       { data: cartData },
//       config
//     );

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     // Handle error if needed
//   }
// };

const getCart = async (cartData, customerData) => {
  const apiKey = customerData.data.apiKey;

  const requestBody = {
    data: cartData,
    apiKey: apiKey,
  };

  try {
    const response = await axios.post(
      "https://app.shop4me.online/view_bag",
      requestBody
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};




export const authService ={ 
    register, login, getUserWishlist, addToCart,getCart
};





//https://app.shop4me.online/bag/addToBag   const response=await axios.get(`https://app.shop4me.online/view_bag`,cartData, config);