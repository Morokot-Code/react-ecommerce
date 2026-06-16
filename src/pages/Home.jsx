import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=8",
        );
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-display">
      <div className="bg-[url(./public/shose.png)] bg-secondary bg-center bg-cover bg-no-repeat border border-t-0 border-x-0 border-b-gray-300 flex items-center h-screen px-10 lg:px-40">
        <div>
          <h2 className="text-xl font-bold">New Collections</h2>
          <h1 className="text-6xl lg:text-7xl font-bold mb-2">
            Luxury Without <br /> Labels
          </h1>
          <p>Explore new-in product and best sellers</p>
          <button className="bg-primary text-white px-8 py-2 mt-4">
            View Collections
          </button>
        </div>
      </div>

      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold">Best Seller</h2>
        <p className="text-center">Explore our best seller products</p>

        {isLoading == true && (
          <div className="flex items-center justify-center my-10">
            <div className="flex items-center gap-1">
              <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-gray-600"></div>
              <span>Loading...</span>
            </div>
          </div>
        )}
        {isLoading == false && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {data?.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8 ">
          <button className="bg-transparent px-8 py-2 border border-primary hover:bg-primary hover:text-white transition-all">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
