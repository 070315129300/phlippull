import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
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
 
  const productState = useSelector((state) =>state?.product?.product);
const userState = useSelector((state) => state?.auth?.user?.data);

  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const uploadCart = (item) => { // Updated function to accept the item object
     console.log(item?._id,)
    dispatch(
      addProdToCart({
        productId: item?._id,
        quantity,
        price: item?.price,
        apiKey: userState?.apiKey,
      })      
    ); 
  };

       




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
                      
            className="product-card position-relative">
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
                      type="button"
                      onClick={()=>{uploadCart(item)}}
                    >
                      Add to Cart
                    </button>      
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
