import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import {useLocation} from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) =>state?.product?.product?.data);

  const dispatch = useDispatch();
  useEffect(() =>{
    getProducts();
  },[])
  const getProducts = () => {
    dispatch(getAllProducts());
  }

  const location = useLocation();
  const { category } = location.state;
  console.log(category)
  const {brand} = location.state;
  let categoryName = category?.item?.name;
  let brandName = brand?.item?.name;
  console.log(brandName);
  console.log(categoryName);
  console.log("Product State", productState);
  const filteredProducts = productState?.filter(
      (product) => product.category_name === categoryName
  );
   const filteredBrand = productState?.filter(
      (brand) => brand.brand_name === brandName
  );
  console.log("filteredProducts", filteredProducts);

  return (
    <>
      <Meta title={"Our Store copy"} />
      <BreadCrumb title=  {categoryName || brandName}/>
      
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
       
          <div className="col">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                
                <div className="d-flex align-items-center gap-10">
                  
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
                 <div className="products-list pb-5">
                  <div className="d-flex gap-10 flex-wrap"> 
                   
         <ProductCard 
                    grid={grid} 
                        data={filteredProducts ? filteredProducts : productState} />

                            <ProductCard 
                    grid={grid} 
                        data={filteredBrand ? filteredBrand : productState} />
                  </div>
                 </div>

          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;