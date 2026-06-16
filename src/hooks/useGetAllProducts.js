import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const useGetAllProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return {
    data,
    isLoading
  };
};

export default useGetAllProducts;
