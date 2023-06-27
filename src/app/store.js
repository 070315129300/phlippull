import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice"; 
import productReducer from "../features/products/productSlice";
import bannerReducer from "../features/banners/bannerSlice";
import promoReducer from "../features/promo/promoSlice";
import contactReducer from "../features/contact/contactSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import brandReducer from "../features/brand/brandSlice"

export const store = configureStore({
  reducer: {
    
    auth: authReducer,
    product: productReducer,
    banner: bannerReducer,
    promo: promoReducer,
    contact: contactReducer,
    categories:categoriesReducer,
    brand:brandReducer
  },
});

