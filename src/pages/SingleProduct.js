import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import {useDispatch, useSelector} from "react-redux";
import {getAProduct} from "../features/products/productSlice";
import {addProdToCart,} from "../features/user/userSlice";
import {toast} from "react-toastify";

const SingleProduct = () => {
  const dispatch = useDispatch();
const [quantity, setQuantity] = useState(1);

  const productState = useSelector((state) =>state?.product?.product);
const userState = useSelector((state) => state?.auth?.user?.data);
  console.log(userState);
  

  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, [dispatch, getProductId]);

    const uploadCart = () =>{
        dispatch(addProdToCart({
          productId:productState?._id,
          quantity,
          price:productState?.price,
          apiKey:userState?.apiKey,
        }))
      
    }
    
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,    
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                 {productState?.images && productState.images.length > 0 ? (
        <ReactImageZoom {...props} img={productState.images[0]} />
      ) : (
        <div>No image available</div>
      )}
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {/* <div>
                <img
                   src={productState.images[0]}    
                   className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                src={productState.images[1]}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                src={productState.images[2]}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                src={productState.images[3]}
                  className="img-fluid"
                  alt=""
                />
              </div> */}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
               { productState?.name}
                </h3>
              </div>
              <div className=" py-3">
             <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">price :</h3>
              <p className="product-data">{productState?.price}</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">{productState?.type}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{productState?.brand_name}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                 <p className="product-data">{productState?.category_name}</p>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                 <h3 className="product-heading">Quantity :</h3>
                 <div className="">
                  <input
                  type="number"
                  name=""
                  min={1}
                  max={20}
                  className="form-control"
                  style={{width:"70px"}}
                  id=""
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  />
                 </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      type="button"
                      onClick={()=>{uploadCart( )}}
                    >
                      Add to Cart
                    </button>
                    {/* <button className="button signup">Buy It Now</button> */}
                  </div>
                </div>

                <div className="col-12  p-3">
            <h4>Description</h4>
            <div className="bg-white p-3">
                 <p className="product-data">{productState?.details}</p>
                  <p className="product-data">{userState?.apiKey}</p>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
     
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>

      
    </>
  );
};

export default SingleProduct;
