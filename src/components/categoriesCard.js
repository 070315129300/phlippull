import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {categoriesQuery  } from "../features/categories/categoriesSlice";

import { useDispatch, useSelector } from "react-redux";
import {addProdToCart} from "../features/user/userSlice";


const CategoriesCard = (props) => {
  const { grid, data } = props;
  

  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24); // Number of items to display per page
const [quantity, setQuantity] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const productState = useSelector((state) =>state?.product?.product);
const userState = useSelector((state) => state?.auth?.user?.data);
 

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

 const getAllAvailable = (_id) => {
    dispatch(categoriesQuery(_id));
  };

   const handleClick = (category) => {
    console.log('category', category)
    // history.push({ pathname: "/profile-two", state: data });
  };
  const handlesClick = (itemName)=>{
    console.log(itemName);
  }
  return (
    <>
    
      {currentItems?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col"
            }`}
            onClick={() => {handleClick(item?.name)}}
          >
              <Link           
            className="cat-card position-relative" to="/productcopy"  state={{ category: { item } }}>
              <div className="cat-image">
                 <img
                  src={item?.icon}
                  className="img-fluid"
                  alt="product image"
                  width={30}
                   height={30}
                />
              </div>              
                 </Link>
                 <div className="cat-details">
                <span>{item?.name}</span>
                 </div>
          </div>

        );
      })}
    </>
  );
};

export default CategoriesCard;









