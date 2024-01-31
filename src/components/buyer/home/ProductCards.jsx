import { CiBookmark } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";

const ProductCards = () => {
  return (
    <div className="container-fluid w-[70%] h-[80vh] sm:w-[45%] sm:h-[65vh] md:w-[30%] md:h-[70vh] lg:w-[23%] lg:h-[75vh] bg-white rounded-lg p-3 flex flex-col justify-between flex-wrap items-center gap-3 shadow-lg">
      <div className=" rounded-md w-[100%] h-[40%] md:h-[30vh] border p-2  ">
        <img
          src="https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80"
          alt=""
          className="w-[100%] h-[100%] rounded-md"
        />
      </div>
      <div className="self-start w-[100%] flex flex-col gap-2">
        <h2 className="text-lg  h-6  ">capsicum</h2>
        <div className="w-[100%] bg-[#E8E8E8] text-gray-400 p-1 rounded-md px-3">
          1 kg{" "}
        </div>
      </div>
      <div className="self-start text-lg font-bold flex justify-center items-center">
        <FaRupeeSign /> 48{" "}
      </div>
      <div className="flex justify-between items-center w-[100%] ">
        <button className="p-1 md:p-2 border rounded-md">
          <CiBookmark className="font-bold  text-sm md:text-lg " />
        </button>
        <button className="border-red-600 bg-white p-1 md:p-2 w-[70%] border rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
