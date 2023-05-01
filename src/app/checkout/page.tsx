"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../(store)/features/cartSlice";
import CheckoutProduct from "@/components/CheckoutProduct";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const { status } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  console.log(status);

  return (
    <div className="bg-gray-100 ">
      <main className="mx-auto lg:flex max-w-screen-2xl">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src={
              "https://images-na.ssl-images-amazon.com/images/G/01//pxd/marketing/paycode/2021/US-MX-lp-lego-assets/slsm_banner_1500x300.png"
            }
            width={1020}
            height={250}
            alt="banner img"
            className="object-contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl font-semibold border-b">
              {items.length === 0 ? "Your cart is empty." : "Shopping Cart"}
            </h1>
            <AnimatePresence>
              {items.map((item, index) => (
                <CheckoutProduct key={index} {...item} />
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* right */}
        {items.length > 0 && (
          <div className="flex flex-col p-10 bg-white shadow-md">
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">
                  {" "}
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(total)}
                </span>
              </h2>
              <button
                disabled={status === "unauthenticated" ? true : false}
                className={`button ${
                  status === "unauthenticated" &&
                  "from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed hover:!bg-gray-500"
                }`}
              >
                {status === "unauthenticated"
                  ? "Sign in to checkout"
                  : "Proceed to checkout"}
              </button>
            </>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
