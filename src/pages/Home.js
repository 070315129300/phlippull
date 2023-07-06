// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Slider from "react-slick";
// import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
// import Container from "../components/Container";
// import ProductCard from "../components/ProductCard";
// import SpecialProduct from "../components/SpecialProduct";
// import PromoCard from "../components/PromoCard";
// import BrandCard from "../components/brandcard";
// import CategoriesCard from "../components/categoriesCard";
// import { getAllProducts } from "../features/products/productSlice";
// import { getAllPromo } from "../features/promo/promoSlice";
// import { allbrand } from "../features/brand/brandSlice";
// import { loginUser } from "../features/user/userSlice"; 
// import { bannerService } from "../features/banners/bannerService";
// import { categoriesQuery } from "../features/categories/categoriesSlice";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import { NavLink, Link, Route } from "react-router-dom";







const Home = () => {
//   const [grid, setGrid] = useState(4);
//   const productState = useSelector((state) => state?.product?.product?.data);
//   const promoState = useSelector((state) => state?.promo?.promo?.data);
//   const brandState = useSelector((state) => state?.brand?.brand?.data?.brands);
//   const userState = useSelector((state) => state?.auth?.user?.data);
//   console.log(userState);
//   const [bannerImages, setBannerImages] = useState([]);
// const categoriesState = useSelector(
//     (state) => state?.categories?.categories?.data?.categories
//   );

  // const filteredCat = categoriesState?.filter(
  //   (category) => category.available === true
  // );
  // const filteredData = productState
  //   ?.filter((product) => product.top_item === true)
  //   .sort((a, b) => b.uploaded_at - a.uploaded_at); // Sort the special products in ascending order based on their IDs

  // const filteredProduct = productState
  //   ?.filter((product) => product.trending === true)
  //   .sort((a, b) => b.uploaded_at - a.uploaded_at); // Sort the trending products in ascending order based on their IDs

  // const filteredBrands = brandState?.filter((brand) => brand.available === true);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const location = useLocation();

  // useEffect(() => {
  //   getProducts();
  //   getPromo();
  //   getbrand();
  //   getCategories();
  //   const fetchBannerImages = async () => {
  //     try {
  //       const response = await bannerService.getBanners();
  //       setBannerImages(response.data.data.map((item) => item.picture));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchBannerImages();
  // }, []);



  // const getProducts = () => {
  //   dispatch(getAllProducts());
  // };

  // const getbrand = () => {
  //   dispatch(allbrand());
  // };

  // const getPromo = () => {
  //   dispatch(getAllPromo());
  // };

  //   const getCategories = () => {
  //   dispatch(categoriesQuery());
  // };

  // const responsive ={
  //   suoerLargeDesktop:{
  //     breakpoint: {max: 4000, min:3000},
  //     items:5
  //   },
  //   desktop:{
  //     breakpoint: {max: 3000, min:1024},
  //     items:5
  //   },
  //   tablet:{
  //     breakpoint: {max: 1024, min:464},
  //     items:4
  //   },
  //   tablet:{
  //     breakpoint: {max:464, min:0},
  //     items:3
  //   }
  // }
// const settings = {
//   dots: true, // Display dots navigation
//   infinite: true, // Enable infinite loop
//   speed: 500, // Transition speed in milliseconds
//   slidesToShow: 1, // Number of slides to show at a time
//   slidesToScroll: 1, // Number of slides to scroll at a time
//   autoplay: true, // Enable autoplay
//   autoplaySpeed: 3000, // Autoplay interval in milliseconds
// };
//    const handleClick = (categoryName) => {
//     console.log("Clicked on category:", categoryName);
//   }; 

  return (
    <>
     <div className="maintenance-message">
      <h1>Website Under Maintenance</h1>
      <p>We apologize for the inconvenience. kindly use our mobile app for your shopping.</p>
       <div className="row">

               <div className="col-6">
  <small>
    <a
      href="https://apps.apple.com/ng/app/shop4me/id6449968422"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="images/appstorelogo.png"
        style={{ height: '50px', width: '150px' }}
        alt="App Store"
      />
    </a>
  </small>
</div>
<div className="col-6">
  <small>
    <a
      href="https://play.google.com/store/apps/details?id=com.blackjoe.shop4me"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="images/playstorelogo.png"
        style={{ height: '50px', width: '150px' }}
        alt="Play Store"
      />
    </a>
  </small>
</div>
</div>
    </div>
     
     
      {/* <Container class1="home-wrapper-1 py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col"> */}
           {/* <Slider {...settings}>
            {bannerImages.length > 0 ? (
              bannerImages.map((imageUrl) => (
                <div className="" key={imageUrl}>
                  <img
                    src={imageUrl}
                    className=""
                    alt="main banner"
                    style={{ height: "", width: "100%" }}
                  />
                </div>
              ))
            ) : (
              <div className="">
                <img
                  src={""}
                  className=""
                  alt="main banner"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
            )}
          </Slider> */}
             
          {/* </div> 
        </div>
      </Container> */}

        {/* <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Categories</h3>
          </div>
        </div>
        <div className="row">
                        <Carousel responsive={responsive} infinite>
  {filteredCat && filteredCat.length > 0 ? (
    filteredCat.map((category, index) => (
      <div
        key={index}
        className={`${location.pathname === "/product" ? `gr-${grid}` : "col"}`}
        onClick={() => {
          handleClick(category.name);
        }}
      >
        <Link
          className="cat-card position-relative"
          to={{
            pathname: "/productcopy",
            state: { category: { name: category.name } }
          }}
        >
          <div className="cat-image">
            <img
              src={category.icon}
              // height={30}
              // width={30}
              className="img-fluid"
              alt={`Image ${index}`}
            />
          </div>
          <div className="cat-details">
            <span>{category.name}</span>
          </div>
        </Link>
      </div>
    ))
  ) : (
    <div>No categories available.</div>
  )}
</Carousel>

            {/* <CategoriesCard 
                    grid={grid} 
                        data={filteredCat ? filteredCat : []} /> */}

        {/* </div>
      </Container> */} 

      {/* <Container className="home-wrapper-2 py-5">
        {promoState && promoState.length > 0 && (
          <div className="row">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <PromoCard grid={grid} data={promoState.slice(0, 6)} />
            </div>
          </div>
        )}
      </Container> */}

      {/* <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Top Item</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct grid={grid} data={filteredData ? filteredData.slice(0, 4) : []} />
        </div>
      </Container> */}

      {/* <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Trendy Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard grid={grid} data={filteredProduct ? filteredProduct.slice(0, 4) : []} />
        </div>
      </Container> */}

      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
            <BrandCard grid={grid} data={filteredBrands ? filteredBrands : []} />
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default Home;
