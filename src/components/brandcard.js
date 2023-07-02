import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {allbrand  } from "../features/brand/brandSlice";

const Brandcard = (props) => {
  const { grid, data } = props;

  let location = useLocation();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24); // Number of items to display per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    
  const getAllAvailable = (_id) => {
    dispatch(allbrand(_id));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   const handleClick = (brand) => {
    console.log('brand', brand)
    // history.push({ pathname: "/profile-two", state: data });
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
            onClick={() => {handleClick(item?.name)}}          
          >

           <Link  to="/productcopy"  state={{ brand: { item } }}>
               <div className="row">
                 <div className="col-4"><img src={item?.icon} width="25px"  /></div>
                 <div className="col-8"><h6>{item?.name}</h6></div>

                 </div>                 
           </Link>
   
          </div>
        );
      })}
     
    </>
  );
};

export default Brandcard;