import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./userSlice";

import { base_url,base1_url, config,apiKeys} from "../../utils/axiosConfig";


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

const logout = async () => {
   try {
      // Clear local storage
      localStorage.removeItem("customer");

      // Additional logout logic can be added if needed
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
};


const addToCart = async (cartData) => {
  try {
    const response = await axios.post("https://app.shop4me.online/bag/addToBag", cartData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getCart = async (userCard) => {
  const { apiKey } = userCard;
  console.log(apiKey);
  const requestURL = `${base_url}/bag/getBag/${apiKey}`;

  try {
    const response = await axios.get(requestURL);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};



const getUserWishlist = async () => {
    const response=await axios.get(`${base_url}/addToWishlist`, config);
    if(response.data){
      return response.data;  
    }
}


// const removeProductFromCart = async (productId, apiKey) =>{  
//     console.log(productId)
//   const requestData = {
//     ...productId,
//     apiKey: apiKey
//   };

//   try {
//     const response = await axios.post(
//       "https://app.shop4me.online/bag/removeItem",
//       requestData
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     // Handle error if needed
//   }
// };

const removeProductFromCart = async (productId, apiKey) => {
  console.log(productId);
  const requestData = {
    productId: productId,
    apiKey: apiKey,
  };

  try {
    const response = await axios.post(
      "https://app.shop4me.online/bag/removeItem",
      requestData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};


const updateProductFromCart = async (productId, apiKey) =>{  
    console.log(productId)
  const requestData = {
    productId:productId,
    apiKey: apiKey
  };

  try {
    const response = await axios.post(
      "https://app.shop4me.online/bag/changeBagItem",
      requestData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};





export const authService ={ 
    register, login, getUserWishlist, addToCart,getCart, removeProductFromCart, updateProductFromCart,logout,
};




