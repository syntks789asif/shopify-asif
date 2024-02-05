// import React from "react";
import Image from "next/image";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import ImgsData from "./ImgsData";


const ProductPage = () => {
 

  return (
    <div className="xl:p-36 sm:p-6 m-2 ">
      <div className="flex md:flex-row flex-col sm:justify-center justify-between gap-2 border-b-[2px] border-dashed border-gray-400  sm:h-[100%] sm:w-[100%] ">
        {/* product image */}
        <ImgsData/>
        

        {/* product details */}
        {/* className="h-[700px] w-[580px] " */}
        <div className=" sm:h-[100%] sm:w-[100%] lg:w-[90%] lg:h-[80%] md:w-[70%] md:h-[85%] mt-6 mb-16 sm:p-4">
          <div className="flex justify-between mb-3">
            <div className="text-gray-300 underline ">
              <h3 className="">Fresho</h3>
            </div>

            <div className="flex items-center gap-2 bg-slate-200 rounded-2xl h-6 w-17 p-1">
              <MdOutlineDeliveryDining />
              <p>2 hrs</p>
            </div>
          </div>

          <div className="mb-7">
            <h3 className="font-semibold text-xl mb-2 ">
              Fresho Capsicum - Green (Loose), 1 kg
            </h3>
            <h3 className="text-gray-400 mb-2">MRP:₹92</h3>
            <h3 className="font-medium text-lg mb-2">
              Price: ₹48{" "}
              <span className="text-gray-400 font-normal text-base">
                (₹48 / kg)
              </span>
            </h3>
            <h3 className="text-green-700 text-sm mb-1">You Save:48% OFF</h3>
            <h3 className="text-gray-400 text-sm">(inclusive of all taxes)</h3>
          </div>

          <div className=" sm:flex justify-between mb-4 md:block lg:flex">
            {/* <button className=" bg-[#cc0000] text-white font-bold rounded-md lg:pl-24 lg:pr-24 p-4 ">
              Add to basket
            </button> */}
            <div className="bg-[#cc0000] text-white  lg:h-14 rounded-md md:pl-12 md:pr-12 xs:pl-4 xs:pr-4 p-4 px-10 md:font-medium text-xs md:text-base m-2">
              <span>Add to basket</span>
            </div>

            <div className="border border-gray-400  lg:h-14 rounded-md md:pl-12 md:pr-12 xs:pl-4 xs:pr-4 p-4 flex items-center gap-2 md:font-medium text-xs md:text-base m-2 ">
              <FaRegBookmark className="text-lg" /> save for later{" "}
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-500 mb-6">
            <MdOutlineDeliveryDining />
            <h3>Earliest: Get it in 2 hrs</h3>
          </div>

          {/* Pick sizes  */}
          <div>
            <h3 className="font-semibold mb-4">Pick sizes</h3>

            <div className="sm:max-h-[20%] sm:w-[100%] w-[100%] h-[100%]">
              <div className="flex justify-between border border-gray-400 rounded-md p-2 mb-3 sm:max-w-[100%] sm:max-h-[100%] ">
                <h2>1 Kg</h2>
                <div>
                  <p className="mb-2">
                    ₹48{" "}
                    <span className="text-gray-500 text-base ">
                      (₹48 / kg){" "}
                    </span>
                  </p>
                  <p className="text-gray-500 ">
                    ₹92{" "}
                    <span className="text-green-700 font-normal rounded-sm text-sm bg-gray-200 p-1">
                      48% OFF
                    </span>
                  </p>
                </div>
                <img src="" alt="" />
              </div>

              <div className="flex justify-between border border-gray-400 rounded-md p-2 mb-3">
                <h2>1 Kg</h2>
                <div>
                  <p className="mb-2">
                    ₹48{" "}
                    <span className="text-gray-500 text-base ">
                      (₹48 / kg){" "}
                    </span>
                  </p>
                  <p className="text-gray-500">
                    ₹92{" "}
                    <span className="text-green-700 font-normal rounded-sm text-sm bg-gray-200 p-1">
                      48% OFF
                    </span>
                  </p>
                </div>
                <img src="" alt="" />
              </div>

              <div className="flex justify-between border border-gray-400 rounded-md p-2 mb-3 ">
                <h2>1 Kg</h2>
                <div>
                  <p className="mb-2">
                    ₹48{" "}
                    <span className="text-gray-500 text-base ">
                      (₹48 / kg){" "}
                    </span>
                  </p>
                  <p className="text-gray-500">
                    ₹92{" "}
                    <span className="text-green-700 font-normal rounded-sm text-sm bg-gray-200 p-1">
                      48% OFF
                    </span>
                  </p>
                </div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose Bigbasket? */}

      <div className="border-b-[2px] border-dashed border-gray-400 pb-8  ">
        <div className="text-center m-6">
          <p className="text-lg font-bold">Why choose Bigbasket?</p>
        </div>

        <div className="flex gap-6 justify-center sm:flex-wrap lg:flex-nowrap flex-wrap">
          <div className="bg-gray-100 w-72 h-40 p-4 text-center rounded-md flex flex-col items-center ">
            <div className="w-16 h-16 rounded-full p-3 bg-white mb-3">
              <img src="/bottle-svgrepo-com.svg" alt="" />
            </div>

            <p className="font-medium">Quality</p>
            <p className="text-gray-500">You can trust</p>
          </div>

          <div className="bg-gray-100 w-72 h-40 p-4 text-center rounded-md flex flex-col items-center">
            <div className="w-16 h-16 rounded-full p-3 bg-white mb-3">
              <img src="/bottle-svgrepo-com.svg" alt="" />
            </div>

            <p className="font-medium">Quality</p>
            <p className="text-gray-500">You can trust</p>
          </div>

          <div className="bg-gray-100 w-72 h-40 p-4 text-center rounded-md flex flex-col items-center">
            <div className="w-16 h-16 rounded-full p-3 bg-white mb-3">
              <img src="/bottle-svgrepo-com.svg" alt="" />
            </div>

            <p className="font-medium">Quality</p>
            <p className="text-gray-500">You can trust</p>
          </div>

          <div className="bg-gray-100 w-72 h-40 p-4 text-center rounded-md flex flex-col items-center">
            <div className="w-16 h-16 rounded-full p-3 bg-white mb-3">
              <img src="/bottle-svgrepo-com.svg" alt="" />
            </div>

            <p className="font-medium">Quality</p>
            <p className="text-gray-500">You can trust</p>
          </div>
        </div>
      </div>

      {/* Fresho Capsicum - Green (Loose) */}

      <p className="mt-7 mb-4 font-semibold text-lg">
        Fresho Capsicum - Green (Loose)
      </p>
      <div className="border rounded-lg p-4">
        <div className="border-b-[1px]  border-gray-300 p-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">About the Product</p>
            <FaPlus />
          </div>

          <ul
            className={"list-disc list-inside ml-5 font-light text-sm w-[90%] "}
          >
            <li>
              Leaving a moderately pungent taste on the tongue, Green capsicums,
              also known as green peppers are bell shaped, medium-sized fruit
              pods.
            </li>
            <li>
              They have thick and shiny skin with a fleshy texture inside.
            </li>
          </ul>
        </div>

        <div className="border-b-[1px]  border-gray-300 p-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Benefits</p>
            <FaPlus />
          </div>

          <ul
            className={"list-disc list-inside ml-5 font-light text-sm w-[90%]"}
          >
            <li>
              Green capsicums have powerful antioxidants and anti-inflammatory
              properties.
            </li>
            <li>
              Rich in Vitamin A, B complex, C and phytonutrients. Relieves pain
              of bone disorders and has the capacity to relax the repirartory
              passage.
            </li>
          </ul>
        </div>

        <div className="border-b-[1px]  border-gray-300 p-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Storage and Uses</p>
            <FaPlus />
          </div>

          <ul
            className={"list-disc list-inside ml-5 font-light text-sm w-[90%]"}
          >
            <li>
              Store them in a cool, dry place away from direct sunlight. Keep
              capsicums dry as moisture makes them rot faster. Refrigerate the
              peppers unwashed, in a plastic bag and consume within a week.
              Resort to refrigeration only when they cannot be consumed
              immediately.
            </li>
          </ul>
        </div>

        <div className=" p-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Other Product Info</p>
            <FaPlus />
          </div>

          <div className="font-light text-sm w-[90%]">
            <p>EAN Code: 100000670</p>
            <p>
              Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No.
              7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above
              HDFC Bank Bangalore, Karnataka 560071
            </p>
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className=" flex flex-col lg:flex-row items-center justify-between h-22 m-4 mt-4">
        {/* <div className="lg:flex gap-6 items-end justify-between"> */}

        <div className="flex justify-between items-center gap-5 mb-4">
          <div className="h-24 w-24 overflow-hidden rounded-md">
            <img src="/img1.jpeg" alt="" />
          </div>

          <div>
            <div className="text-gray-400  m-6 md:m-2">
              <h3 className="">Fresho</h3>
            </div>

            <div className="mb-7">
              <h3 className="font-semibold text-xl mb-2 m-6">
                Fresho Capsicum - Green (Loose), 1 kg
              </h3>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-between items-end md:gap-32 lg:gap-6 ">
          <div className="mb-4">
            <h3 className="text-gray-400 mb-2">MRP:₹92</h3>
            <h3 className="font-medium text-lg mb-2">
              ₹48{" "}
              <span className="text-gray-400 font-normal text-base">
                (₹48 / kg)
              </span>
            </h3>
            <h3 className="text-green-700 text-sm mb-1 M-2">
              You Save:48% OFF
            </h3>
          </div>
          {/* <h3 className="text-green-700 text-sm mb-1 M-2">You Save:48% OFF</h3> */}

          <button className="bg-[#cc0000] text-white font-bold rounded-md md:pl-24 md:pr-24 sm:pl-14 sm:pr-14 pl-6 pr-6 p-4 h-16">
            Add to basket
          </button>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductPage;
