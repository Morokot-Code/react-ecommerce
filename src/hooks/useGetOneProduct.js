import axios from "axios";
import { useEffect, useState } from "react";

const useGetOneProduct = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return {
    data,
    isLoading
  };
};
export default useGetOneProduct;
