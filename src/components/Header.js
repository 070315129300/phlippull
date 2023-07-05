import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsPersonFill, BsClipboardCheck, BsPerson } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import CategoriesCard from "./categoriesCard";
import { categoriesQuery } from "../features/categories/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const [grid, setGrid] = useState(4);
  const categoriesState = useSelector(
    (state) => state?.categories?.categories?.data?.categories
  );

  const filteredData = categoriesState?.filter(
    (category) => category.available === true
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    dispatch(categoriesQuery());
  };

  const userCartState = useSelector(
    (state) => state?.auth?.cartProducts?.bag?.bagitem
  );
  const userState = useSelector((state) => state?.auth?.user?.data);
console.log(userState)
const name = userState?.fname;

console.log(name);

   
  
  
  const [total, setTotal] = useState(null);
  
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum += Number(userCartState[index].quantity) * Number(userCartState[index].product.price);
    }
    setTotal(sum);
  }, [userCartState]);

  const logout = () => {
    // Clear local storage
    localStorage.removeItem("customer");

    // Clear Redux state
    dispatch(logoutUser());

    // Additional logout logic can be added if needed
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" >
                  +234 (0)8164520367
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                    <NavLink to="/">

                {/*<Link className="text-white">Dev Corner</Link>*/}
                <img
                    src="images/shop4me.jpg"
                    style={{ height: '50px', width: '200px' }}
                    // className="img-fluid rounded-3"
                    alt="main banner"
                />
                </NavLink>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            
            <div className="col-5">
              
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                {/*<div>*/}
                {/*  <Link*/}
                {/*    to="/compare-product"*/}
                {/*    className="d-flex align-items-center gap-10 text-white"*/}
                {/*  >*/}
                {/*    <img src={compare} alt="compare" />*/}
                {/*    <p className="mb-0">*/}
                {/*      Compare <br /> Products*/}
                {/*    </p>*/}
                {/*  </Link>*/}
                {/*</div>*/}
                  
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={''} alt="" />
                    <p className="mb-0">
                     
                    </p>
                  </Link>
                </div>
                 <div>
                      <Link to="product"
                       className="d-flex align-items-center gap-10 text-white"
                        >
                      STORE
                       </Link>
                     </div>
                    <div> 
                
                  <div className="dropdown" style={{ paddingLeft: '30px' }}>
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="me-10 d-inline-block ">
                        Account
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu bg-white"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li className="dropdown-item bg-white">
                                <div className="bg-white">
          {name ? (
            <Link
              to=""
              className="dropdown-item text-dark bg-white align-items-center gap-10"
              onClick={logout}
            >
              <p className="mb-0">
                Logout
              </p>
            </Link>
          ) : (
            <Link
              to="/login"
              className="dropdown-item text-dark bg-white align-items-center gap-10"
            >
              
              <p className="mb-0">
               <BsPersonFill size={32} />
                Login
              </p>
            </Link>
          )}
        </div>

                      </li>
  
                      <li className="dropdown-item bg-white">
                               <div>
          {name ? (
            <Link
              to="/account"
              className="dropdown-item text-dark bg-white align-items-center gap-10"
              
            >
              
              <p className="mb-0">
                <BsPerson size={32} />
                {name}
              </p>
            </Link>
          ) : (
            <Link
              to=""
              className="dropdown-item text-dark bg-white align-items-center gap-10"
            >
             
              <p className="mb-0">
                <BsPerson size={32}/>
                 Account
              </p>
            </Link>
          )}
        </div>

                      </li>
                      <li className="dropdown-item bg-white">
                        <Link className="dropdown-item text-dark bg-white" to="/orders">
                        
                        <BsClipboardCheck size={32} />
                        Order
                        </Link>
                      </li>
                         
                
                    </ul>
                  </div>
                  </div>      
                  {/* <div>
          {name ? (
            <Link
              to="/"
              className="d-flex align-items-center gap-10 text-white"
              onClick={logout}
            >
              <img src={user} alt="user" />
              <p className="mb-0">
                Logout
              </p>
            </Link>
          ) : (
            <Link
              to="/login"
              className="d-flex align-items-center gap-10 text-white"
            >
              <img src={user} alt="user" />
              <p className="mb-0">
                Login
              </p>
            </Link>
          )}
        </div> */}
          <div>
                      
                  <Link
                    to="/cart"
                    className="d-flex flex-column align-items-center text-white cartstyle"
                  > 
                                
                <span className="cartstyles">
              {userCartState?.length ? userCartState.length : ''}
                </span>
                <img src={cart} alt="cart" width={25} />                
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;
