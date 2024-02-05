import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <main className=" h-[100%] flex justify-center items-center bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-400 md:w-[98.95vw]  md:h-screen md:-mb-10">
      <div className=" sm:p-14 xs:w-[100%]  md:h-[70vh]  xs:h-[100%] sm:w-[414px] rounded-lg p-[30px] sm:shadow-lg bg-white  md:mt-6 sm:h-[90%] xs:rounded-none md:m-5 md:border-none md:rounded-xl">
        <div>
          <Link href="/buyer/home">
            <img
              src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/oauth_provider/merchant/logo.svg?v=1631025778  "
              className="w-[100px] cursor-pointer"
            ></img>
          </Link>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-[1.8rem] xs:text-base sm:text-[1rem]">
            Log in
          </h1>
          <h3 className="text-[#616161] mb-3 xs:text-xs sm:text-sm">
            Continue to Shopify
          </h3>
        </div>
        <div className="flex flex-col">
          {" "}
          <label for="connect" className="text-[14px]xs:text-xs">
            Email{" "}
          </label>
          <input
            type="email"
            id="connect"
            placeholder="user email"
            className="border border-solid border-gray-500 rounded p-2 mb-3 xs:p-1 "
          />
        </div>
        <Link href="/buyer/login/account">
        <button className="border border-solid bg-[#303030] border-gray-500 w-[100%] rounded p-2 text-white font-semibold xs:p-1">
          Continue with email
        </button>
        </Link>
        <div>
          {" "}
          <h1 className="text-center mt-3">or</h1>
        </div>
        <div>
          <div className="flex justify-around mt-2 gap-2 ">
            {" "}
            <p className="border  border-solid  w-[80px] rounded-lg bg-[#f1f1f1]">
              {" "}
              {/* <img
                src="/facebook.png "
                className=" w-[28px] h-[28px]  mt-1 ml-5 "
              ></img> */}
              <FaFacebookF
                color="blue"
                // width={30}
                className="w-[25px] h-[25px] mx-auto mt-1"
              />
            </p>
            <p className="border  border-solid w-[80px] rounded-lg  bg-[#f1f1f1]">
              <FcGoogle className="text-[28px] ml-6 mt-1 " />
            </p>
            <p className="border  border-solid w-[80px] rounded-lg bg-[#f1f1f1]">
              <FaApple className="  text-[28px] ml-6 mt-1 " />{" "}
            </p>
            {/* <img src='/facebook.png ' className='w-[100px]'></img> */}
          </div>
          <h1 className="mt-7 text-semibold xs:text-xs sm:text-sm">
            New to shopify?
            <Link href="/buyer/register">
            <span className="text-[#005db3] font-semibold cursor-pointer hover:font-semibold sm:text-sm ">
              &nbsp; Get started --
            </span>
            </Link>
          </h1>
          <div className="mt-4">
            <span className="m-2 text-[#616161] text-sm border-b-2 border-transparent hover:border-gray-400 cursor-pointer">
              help{" "}
            </span>
            <span className="m-2 text-[#616161] text-sm border-b-2 border-transparent hover:border-gray-400 cursor-pointer">
              privacy
            </span>
            <span className="m-2 text-[#616161] text-sm border-b-2 border-transparent hover:border-gray-400 cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
