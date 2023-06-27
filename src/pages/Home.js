import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import PromoCard from "../components/PromoCard";
import BrandCard from "../components/brandcard";
import { getAllProducts } from "../features/products/productSlice";
import { getAllPromo } from "../features/promo/promoSlice";
import { allbrand } from "../features/brand/brandSlice";
import { bannerService } from "../features/banners/bannerService";

const Home = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product?.data);
  const promoState = useSelector((state) => state?.promo?.promo?.data);
  const brandState = useSelector((state) => state?.brand?.brand?.data?.brands);
  const [bannerImages, setBannerImages] = useState([]);

  const filteredData = productState
    ?.filter((product) => product.top_item === true)
    .sort((a, b) => b.uploaded_at - a.uploaded_at); // Sort the special products in ascending order based on their IDs

  const filteredProduct = productState
    ?.filter((product) => product.trending === true)
    .sort((a, b) => b.uploaded_at - a.uploaded_at); // Sort the trending products in ascending order based on their IDs

  const filteredBrands = brandState?.filter((brand) => brand.available === true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    getPromo();
    getbrand();
    const fetchBannerImages = async () => {
      try {
        const response = await bannerService.getBanners();
        setBannerImages(response.data.data.map((item) => item.picture));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBannerImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const getbrand = () => {
    dispatch(allbrand());
  };

  const getPromo = () => {
    dispatch(getAllPromo());
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col">
            <Slider {...settings}>
              {bannerImages.length > 0 ? (
                bannerImages.map((imageUrl) => (
                  <div className="" key={imageUrl}>
                    <img
                      src={imageUrl}
                      className=""
                      alt="main banner"
                      style={{ height: "500px", width: "100%" }}
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
            </Slider>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        {promoState && promoState.length > 0 && (
          <div className="row">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <PromoCard grid={grid} data={promoState.slice(0, 6)} />
            </div>
          </div>
        )}
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Top Item</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct grid={grid} data={filteredData ? filteredData.slice(0, 4) : []} />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Trendy Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard grid={grid} data={filteredProduct ? filteredProduct.slice(0, 4) : []} />
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
            <BrandCard grid={grid} data={filteredBrands ? filteredBrands : []} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
