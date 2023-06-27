import axios from "axios";
import { base2_url } from "../../utils/axiosConfig";

const getBanners = async () => {
  
    const response = await axios.post(
      `https://user.shop4me.online/chopameasy/v1/get_banner_pics`
    );
     if(response){ 
         return response;
        // console.log(response);
    }
  };

 


export const bannerService = {
  getBanners,
};
