import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillBasketFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className="container-fluid flex justify-between items-center px-[5%] w-[100%] h-[10vh]   border-t-green-500 border-t-4 ">
      <div className="logo w-[12%] h-[5vh]">
        <img
          src="https://asset.brandfetch.io/idIM18oaEt/idnUr2C08_.svg"
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="searchbar container-fluid w-[40%] relative shadow ">
        <IoSearch className="text-green-500 absolute top-3 left-1 text-lg " />

        <input
          type="text"
          placeholder="search for products"
          className="w-[100%] p-2  px-6 rounded text-black outline-none border-black shadow"
        />
      </div>
      <div className="buttons flex justify-between w-[38%]">
        <div className="relative">
          <button className="btn bg-[#E8E8E8] p-2 shadow pl-6 rounded-md">Select Location</button>
          <FaLocationArrow className="absolute top-3 left-1" />
        </div>

        <button className="btn bg-black p-2 rounded-md text-white">Login /Signup</button>
        <div className="relative ">
          <button className="btn bg-red-200 rounded-md p-2 ">
            <div className="rounded-full bg-red-600 p-1">
              <BsFillBasketFill className="text-md" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
