import Card from "../components/Card";
import useGetAllProducts from "../hooks/useGetAllProducts";
function Products() {
  const {data, isLoading} = useGetAllProducts()
  return (
    <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto ">
      <h1 className="text-center text-3xl uppercase">All Products</h1>

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
    </div>
  );
}

export default Products;
