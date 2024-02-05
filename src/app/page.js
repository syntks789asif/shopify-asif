import Footer from "@/components/buyer/home/Footer";
import Header from "@/components/buyer/home/Header";
import MyBasket from "@/components/buyer/home/MyBasket";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid flex flex-col justify-center items-center  w-[100%] min-h-[100vh] gap-[5vh]">
      <Header />
      <MyBasket />
      <Footer />
    </div>
  );
}
