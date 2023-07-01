import axios from "axios";
import { base_url,} from "../../utils/axiosConfig";



const getCoordinatesFromAddress = async (address) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: 'AIzaSyDiUJ5BCTHX1UG9SbCrcwNYbIxODhg1Fl8',
      },
    });

    if (response.data.results.length > 0) {
      const formattedAddress = response.data.results[0].formatted_address;
      console.log('Address:', formattedAddress);
      return formattedAddress;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export const orderService ={
     getCoordinatesFromAddress
     
};  

