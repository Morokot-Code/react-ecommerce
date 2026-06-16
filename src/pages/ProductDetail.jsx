import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

function ProductDetail() {
  const route = useParams();
  const {data, isLoading} = useGetOneProduct(route.id)
  
  return (
    <>
      {isLoading == true && (
        <div className="flex items-center justify-center my-10">
          <div className="flex items-center gap-1">
            <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-gray-600"></div>
            <span>Loading...</span>
          </div>
        </div>
      )}
      {isLoading == false && (
        <div>
          <div className="bg-gray-200 w-full py-1 font-display">
            <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-2 text-sm">
              <Link to="/">Home</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <Link to="/products">Product</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="font-semibold">{data.title}</span>
            </div>
          </div>

          <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto font-display ">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4 ">
              <div className="p-1 border border-gray-300">
                <img
                  className="w-full h-full object-cover"
                  src={data.image}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-lg uppercase">{data.category}</h3>
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <h1 className="text-2xl font-bold text-red-500 mt-2">
                  ${data.price}
                </h1>

                <div className="flex items-center gap-4 my-8">
                  <div className=" border border-gray-300 w-32 py-2 flex items-center justify-evenly">
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button>1</button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                      </svg>
                    </button>
                  </div>

                  <button className="bg-primary px-8 py-2 text-white cursor-pointer">
                    Add to card
                  </button>
                  <button className="bg-yellow-600 px-8 py-2 text-white hover:bg-yellow-500 cursor-pointer">
                    Pay now
                  </button>
                </div>

                <hr />

                <p className="mt-4 text-gray-500">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
