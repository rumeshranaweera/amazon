import Image from "next/image";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 grow py-2 pl-6">
        <div className="mt-2 flex items-center grow sm:grow-0 mx-2">
          <Image
            src={"https://links.papareact.com/f90"}
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            alt="amazom logo"
            className="cursor-pointer"
            property="true"
          />
        </div>
        {/* search */}
        <div className=" hidden sm:flex items-center h-12 rounded-md grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 overflow-hidden">
          <input
            className="p-2 h-full w-6 grow overflow-hidden shrink focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* right*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap [&_div]:cursor-pointer">
          <div className="link">
            <p>hello man</p>
            <p className="font-extrabold md:text-sm ">Account & list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </div>
          <div className="relative link  flex items-center">
            <span className="absolute top-0 right-0 md:right-6 h-4 w-auto px-1 bg-yellow-400 text-center rounded-full text-black font-bold">
              1
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopping Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personla Care</p>
      </div>
    </header>
  );
}
