
import API from "../configuration/apiConfig"
/**
 * Function for discover movies
 */
export const getDataMovieApi = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  
  };

  /**
 * Function for discover Trending
 */

  export const getDataTrendingApi = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  
  };
 
  /**
 * Function for  Search
 */

  export const getDataSearchApi = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  
  };


   /**
 * Function for  TV Series
 */

   export const getDataSeriesApi = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  
  };


  /**
 * Function for  Carousel
 */

  export const getDataCarouselAPI = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  
  };

  /**
 * Function for  time
 */

  export const getDataTimeAPI = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  };

   /**
 * Function for  Gener
 */

   export const getDataGenerAPI = async (apiString) => {

    let response = await API.get(apiString);
    console.log(response,"responseApi")
    if (response.status === 200) {
        return response.data;
      } else {
        // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
        return false;
      }
    // fetch(
  
  };