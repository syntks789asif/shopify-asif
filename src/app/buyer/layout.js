'use client'
import { Inter } from "next/font/google";
import Header from "@/components/buyer/home/Header";
import Footer from "@/components/buyer/home/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "buyer page",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const exclude = ["/buyer/login", "/buyer/register", "/buyer/login/account"];

  return (
    <div className="container-fluid flex flex-col justify-center items-center  w-[100%] min-h-[100vh] gap-[5vh]">
      {exclude.includes(pathname) ? null : <Header />}

      {children}
      <Footer />
    </div>
  );
}