import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import {addProdToCart} from "../features/user/userSlice";


const ProductCard = (props) => {
  const { grid, data } = props;

  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook
const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24); // Number of items to display per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems?._id,)
const userState = useSelector((state) => state?.auth?.user?.data);
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    const uploadCart = () =>{
        dispatch(addProdToCart({
          productId:currentItems?._id,
          quantity:quantity="1",
          price:currentItems?.price,
          apiKey:userState?.apiKey,
        }))
      
    }
  const navigateToProduct = (_id) => {
    navigate(`/products/${_id}`); // Use navigate function to navigate to the single product page
  }; 

  return (
    <>
      {currentItems?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <Link
            // to={`${
            //   location.pathname == "/products/:id"
            //   ? "/products/:id"
            //   : ":id"
            // }`}

            
            className="product-card position-relative">

              <div className="wishlist-icon position-absolute">

                {/* <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    addToWish(item?._id);
                  }}
                >
                  <img src={wish} alt="wishlist" />
                </button> */}
              </div>
              <Link  to={'/products/'+item?._id}  > 
              <div className="product-image">
                 <img
                  src={item?.images[0]}
                  className="img-fluid"
                  alt="product image"
                   style={{ width: "270px", height: "270px" }}


                />
                <img
                  src={item?.images[0]}
                  className="img-fluid"
                  alt="product image"
                  style={{ width: "270px", height: "270px" }}
                  
                />
              </div>
              </Link>
              <div className="product-details">
                <h6 className="brand">{item?.brand_name}</h6>
                <h5 className="product-title">{item?.name}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
                <Link  to={'/products/'+item?._id}  > 
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item?.details}
                </p>

                <p className="price" style={{color:"#00008B"}}>&#8358; {item?.lidPrice}</p>
                <small className="price reduction-price"style={{color:"grey"}}> &#8358; {item?.costPrice}</small>
                </Link>
                <div className="row">
                   <button
                      className="button "
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      type="button"
                      onClick={()=>{uploadCart( )}}
                    >
                      Add to Cart
                    </button>
                      

                </div>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">

                  {/* <Link  to="/products"  state={{ category: { item } }}> 
                  <button className="border-0 bg-transparent">
                    <img onClick={() => navigateToProduct(item?._id)} src={view} alt="view" />
                  </button>
                  </Link> */}
    {/* <Link  to={'/products/'+item?._id}  > 
                  <button className="border-0 bg-transparent">
                    <img  src={view} alt="view" />
                  </button>
                  </Link> */}
                       

                  {/* <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      {data?.length > itemsPerPage && (
        <ul className="pagination">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default ProductCard;
