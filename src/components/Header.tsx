"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectItems } from "@/app/(store)/features/cartSlice";

export default function Header() {
  const session = useSession();
  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50">
      {/* top nav */}
      <div className="flex items-center p-1 py-2 pl-6 bg-amazon_blue grow">
        <div className="flex items-center mx-2 mt-2 grow sm:grow-0">
          <Link href={"/"}>
            <Image
              src={"https://links.papareact.com/f90"}
              width={150}
              height={40}
              style={{ objectFit: "contain" }}
              alt="amazom logo"
              className="cursor-pointer"
              property="true"
            />
          </Link>
        </div>
        {/* search */}
        <div className="items-center hidden h-12 overflow-hidden bg-yellow-400 rounded-md cursor-pointer sm:flex grow hover:bg-yellow-500">
          <input
            className="w-6 h-full p-2 px-4 overflow-hidden grow shrink focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* right*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap [&_div]:cursor-pointer ">
          <div className="link">
            <p onClick={() => (!session.data ? signIn() : signOut())}>
              {session.data ? `Hello, ${session?.data?.user?.name}` : `sign In`}
            </p>
            <p className="font-extrabold md:text-sm">Account & list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </div>
          <Link href={"/checkout"}>
            <div className="relative flex items-center link">
              <span className="absolute top-0 right-0 w-auto h-4 px-1 font-bold text-center text-black bg-yellow-400 rounded-full md:right-6">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden mt-2 font-extrabold md:inline md:text-sm ">
                <span>Cart</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light">
        <p className="flex items-center link">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopping Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personla Care</p>
      </div>
    </header>
  );
}
