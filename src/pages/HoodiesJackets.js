import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
// import { productService } from "../features/products/productService";

const HoodiesJackets  = () => {
      const [grid, setGrid] = useState(4);
 const productState = useSelector((state) =>state?.product?.product?.data);  

 const filteredData = productState?.filter(
    (product) => product.brand_name === "Canned Foods"
  );
      // const bannerState = useSelector((state) =>state.banner.banner);

  const dispatch = useDispatch();
  useEffect(() =>{
    getProducts();
  },[])
  const getProducts = () => {
    dispatch(getAllProducts());
  }
  return (
    
<>
      <Meta title={"Account"} />
      <BreadCrumb title="My Account" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
             
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
               
              </div>
            </div>
                 <div className="products-list pb-5">
                  <div className="d-flex gap-10 flex-wrap"> 
                  
                 <h1>   My Account Comming Soon !!!!!!!</h1>
                                  {/* <ProductCard grid={grid} data={filteredData ? filteredData : []} /> */}

                  
              </div>
                 </div>   

          </div>
        </div>
      </Container>
    </>
    );
};

export default HoodiesJackets;
