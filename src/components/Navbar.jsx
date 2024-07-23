import React from "react";
import Logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-around items-center">
            <div>
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-20" />
                <p className="content-center">AFC Cleaning</p>
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                <li>
                  <a href="/" className="inline-block py-4 px-4 hover:text-yellow-500 font-medium">Home</a>
                </li>
                <li className="group relative">
                  <a href="" className="inline-block py-4 px-4 hover:text-yellow-500 font-medium flex items-center">
                    Service
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute z-[9999] hidden rounded-md bg-white p-2 text-black group-hover:block  ">
                    <ul className="space-y-3 min-w-full w-max overflow-auto">
                      <li className="p-2 hover:bg-violet-200 cursor-pointer"><a href="/cleaningService/0">One-Off Cleaning Service</a></li>
                      <li className="p-2 hover:bg-violet-200 cursor-pointer"><a href="/cleaningService/1">Regular Cleaning Service</a></li>
                      <li className="p-2 hover:bg-violet-200 cursor-pointer"><a href="/cleaningService/2">Steam/Carpet Cleaning Service</a></li>
                      <li className="p-2 hover:bg-violet-200 cursor-pointer"><a href="/cleaningService/3">End of Lease Cleaning Service</a></li>
                      <li className="p-2 hover:bg-violet-200 cursor-pointer"><a href="/cleaningService/4">Commercial Cleaning Service</a></li>
                      <li className="p-2 hover:bg-violet-200 cursor-pointer"><a href="/cleaningService/5">Disinfectant Cleaning Service</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/aboutUs" className="inline-block py-4 px-4 hover:text-yellow-500 font-medium">About Us</a>
                </li>
                <div className="flex items-center gap-2">
                  <li>
                    <BiPhoneCall className="h-[30px] w-[30px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
                  </li>
                  <li>
                    <div>
                      <p className="text-sm font-medium">Call 0402998286</p>
                    </div>
                  </li>
                </div>
                {/* {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500 font-medium"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))} */}
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 ml-10">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
