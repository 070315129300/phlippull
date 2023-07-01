import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { getUserCart, deleteCartProduct, updateCartProduct } from "../features/user/userSlice";

const orderSchema = yup.object({
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
});

const Checkout = () => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(null);
  
  const[totalAmount, setTotalAmount]= useState(null)
  const userCartState = useSelector(state=>state?.auth?.cartProducts?.bag?.bagitem)
  useEffect(() =>{ 
    dispatch(getUserCart())
  },[])

 const deleteACartProduct = (productId) => {
dispatch(deleteCartProduct({productId}))
 setTimeout(()=>{
  dispatch(getUserCart())
 },200)
} 
 const updateACartProduct = (productId) => {
dispatch(updateCartProduct({cartItemId:productId,quantity}))
 setTimeout(()=>{
  dispatch(getUserCart())
 },200)
} 
useEffect(() =>{
let sum = 0;
for (let index = 0; index < userCartState?.length; index++){
sum = sum + (Number(userCartState[index].quantity) * userCartState[index].product.price)
setTotalAmount(sum)
}
},[userCartState])

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const formik = useFormik({
    initialValues: {
      address: "",
      phone: "",
    },
    validationSchema: orderSchema,
    // onSubmit: async (values) => {
    //   try {
    //     await dispatch(allAddress(values)).unwrap();
    //     // Redirect upon successful login
    //   } catch (error) {
    //     console.error("Error logging user:", error);
    //   }
    // },
  });

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const ll = await getLatLng(results[0]);
      console.log(ll);
      setAddress(value);
      setCoordinates(ll);
    } catch (error) {
      console.error("Error selecting address:", error);
    }
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    className="form-control"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                  <div className="w-100">
                    <PlacesAutocomplete
                      value={formik.values.address}
                      onChange={(address) =>
                        formik.setFieldValue("address", address)
                      }
                      onSelect={(address) =>
                        formik.setFieldValue("address", address)
                      }
                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                          <input
                            {...getInputProps({
                              name: "address",
                              placeholder: "Address",
                              className: "form-control",
                            })}
                          />
                          <div className="error ms-2 my-1">
                            {formik.touched.address && formik.errors.address}
                          </div>
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => (
                            <div {...getSuggestionItemProps(suggestion)}>
                              {suggestion.description}
                            </div>
                          ))}
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Tel"
                    name="phone"
                    className="form-control"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.phone && formik.errors.phone}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {
            userCartState && userCartState?.map((item, index)=>{
              return(
              <div key={index}className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <img className="img-fluid" src={item?.product.images[0]} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">{item?.product.name}</h5>
                    <p className="total-price">&#8358;{item?.product.price}</p>
                      <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={20}
                    id=""
                    value={quantity ? quantity :item?.quantity}
                    onChange={(e)=>{setQuantity(e.target.value)}}
                  />
                   <div>
                  <AiFillDelete onClick={()=>{deleteACartProduct(item?.product._id)}} className="text-danger " />
                </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="price">&#8358; {item?.product.price * item?.quantity}</h5>
                </div>
              </div>
            
              )
            })
            }
            </div>
           
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4> 
              { 
              (totalAmount !== null || totalAmount !== 0) &&
              <h5 className="total-price"> &#8358; {totalAmount}</h5>
}
            </div>
             <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                   
                    <button className="button" type="submit">
                      Make Payment
                    </button>
                  </div>
                </div>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default Checkout;
