import ProductCards from "./ProductCards";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const MyBasket = () => {
  return (
    <main className="container-fluid w-[90%] min-h-[100vh] bg-[#E8E8E8] rounded shadow flex flex-col  justify-start gap-6 ">
      <div className="flex justify-between p-3 items-center">
        <h1 className=" md:text-2xl font-bold text-base ">My Smart Basket</h1>
        <div className="flex justify-between p-2 items-center gap-2">
          <a href="#" className=" text-sm sm:text-lg underline lg:font-bold">
            View All
          </a>
          <div className=" sm:p-2 shadow p-1 bg-white rounded-md active:bg-transparent hover:bg-transparent">
            <FaChevronLeft />
          </div>
          <div className="sm:p-2 shadow p-1 bg-white rounded-md active:bg-transparent hover:bg-transparent">
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div className="container-fluid flex justify-evenly items-center gap-3  flex-wrap mb-3">
        {/* fetch('https://dummyjson.com/products') */}
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
    </main>
  );
};

export default MyBasket;
