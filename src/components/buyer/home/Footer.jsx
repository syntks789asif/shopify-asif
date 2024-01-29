import { SiBigbasket } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full min-h-[100vh] bg-black   p-[5%]">
      <div className=" w-full flex justify-between items-start ">
        <ul className="text-[#DDDDDD] leading-10 p-2">
          <li>
            <h3 className="font-bold text-white text-xl">Big Basket</h3>
          </li>
          <li>
            <Link href="abcd">About Us</Link>
          </li>
          <li>
            <Link href="abcd">in News</Link>
          </li>
          <li>
            <Link href="abcd">Green Basket</Link>
          </li>
          <li>
            <Link href="abcd">Privacy Policy</Link>
          </li>
          <li>
            <Link href="abcd">Affiliate</Link>
          </li>
          <li>
            <Link href="abcd">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="abcd">Careers At bigbasket</Link>
          </li>
          <li>
            <Link href="abcd">bb instant</Link>
          </li>
          <li>
            <Link href="abcd">bb Daily</Link>
          </li>
          <li>
            <Link href="abcd">bb Blog</Link>
          </li>
          <li>
            <Link href="abcd">bbNow</Link>
          </li>
        </ul>
        <ul className="text-[#DDDDDD] leading-10 p-2">
          <li>
            <h3 className="font-bold text-white text-xl">Help</h3>
          </li>
          <li>
            <Link href="abcd">FAQs</Link>
          </li>
          <li>
            <Link href="abcd">Contact Us</Link>
          </li>
          <li>
            <Link href="abcd">bb Wallet FAQs</Link>
          </li>
          <li>
            <Link href="abcd">bb Wallet T&Cs</Link>
          </li>
          <li>
            <Link href="abcd">Vendor Connect</Link>
          </li>
        </ul>
        <div className="flex flex-col gap-10 items-start">
          <div></div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 w-fit rounded-md border-2 p-2 ">
              <div >
                <FaGooglePlay className="text-white text-4xl"/>
              </div>
              <div>
              <span className="text-[#DDDDDD] text-xs">GET IT ON </span>
              <h5 className="text-white text-lg">Google Play</h5>
              </div>
            </div>
            <div className="flex items-center gap-2 w-fit rounded-md  border-2 p-2 ">
            <div>
                <FaApple className="text-white text-4xl"/>
              </div>
              <div>
              <span className="text-[#DDDDDD] text-xs">GET IT ON </span>
              <h5 className="text-white text-lg">Google Play</h5>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="text-white text-2xl p-2 bw-fit"><FaFacebookF/></div>
            <div className="text-white text-2xl p-2  w-fit"><BsInstagram/></div>
            <div className="text-white text-2xl p-2  w-fit"><BsTwitter/></div>
            <div className="text-white text-2xl p-2  w-fit"><FaPinterestP/></div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-lg">Vendor Connect</h3>

            <button
              className="btn font-semibold flex gap-2 items-center border-2 border-white p-2 rounded-md text-white hover:border-black hover:text-black
           hover:bg-white w-auto"
            >
              <SiBigbasket className="text-white hover:text-black hover:bg-black" />
              Become Seller
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
