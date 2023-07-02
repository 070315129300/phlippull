//  export const base_url = "http://localhost:5000";

// const getTokenFromLocalStorage = localStorage.getItem("customer")
//   ? JSON.parse(localStorage.getItem("customer"))
//   : null;

// export const config = {
//   headers: {
//     Authorization: `Bearer ${
//       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//     }`,
//     Accept: "application/json",
//   },
// };

// this base url calls every that has to do with product and creating account.
export const base_url = "https://app.shop4me.online";

// to fetch users 
export const base1_url = "https://user.shop4me.online/api/v1";

export const base2_url = "https://user.shop4me.online/chopameasy/v1";


// get bannner
// https://user.shop4me.online/chopameasy/v1/get_banner_pics


const customerData = ''
// JSON.parse(localStorage.getItem("customer"));
// console.log("customerData:", customerData);

// export const apiKey = customerData.data.apiKey;
export const apiKey = '';


export const config = {
  // headers: {
  //   Authorization: `Bearer ${''}`,
  //   Accept: "application/json",
  //   Customer: customerData, // Add customerData as a property
  // },
};


