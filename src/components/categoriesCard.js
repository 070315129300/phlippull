import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { getAllPromo } from "../features/promo/promoSlice";
import {categoriesQuery  } from "../features/categories/categoriesSlice";

const CategoriesCard = (props) => {
  const { grid, data } = props;

  let location = useLocation();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24); // Number of items to display per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    
  const getAllAvailable = (_id) => {
    dispatch(categoriesQuery(_id));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
            onClick={() => {handleClick(item?.name)}}
            
          >

 <li>
           <Link className="dropdown-item text-white" to="/productcopy"  state={{ category: { item } }}>
               <div className="row">
                 <div className="col-4"><img src={item?.icon} width="25px"  /></div>
                 <div className="col-8"><h6>{item?.name}</h6></div>

                 </div>
                 
           </Link>
        </li>

          </div>
        );
      })}
     
    </>
  );
};

export default CategoriesCard;