import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { base_url,base1_url, config, apiKey} from "../../utils/axiosConfig";


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


const addToCart = async (cartData) => {
  

  const requestData = {
    ...cartData,
    apiKey: apiKey
  };

  try {
    const response = await axios.post(
      "https://app.shop4me.online/bag/addToBag",
      requestData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};



const getCart = async () => {
  const requestURL = `${base_url}/bag/getBag/${apiKey}`;

  try {
    const response = await axios.get(requestURL);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
};


const removeProductFromCart = async (productId) =>{  
    console.log(productId)
  const requestData = {
    ...productId,
    apiKey: apiKey
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

const updateProductFromCart = async (productId) =>{  
    console.log(productId)
  const requestData = {
    ...productId,
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
    register, login, getUserWishlist, addToCart,getCart, removeProductFromCart, updateProductFromCart
};





//https://app.shop4me.online/bag/addToBag   const response=await axios.get(`https://app.shop4me.online/view_bag`,cartData, config);