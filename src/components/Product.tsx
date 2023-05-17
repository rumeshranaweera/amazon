"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/(store)/features/cartSlice";

function Product({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
}: product) {
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() > 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      category,
      description,
      image,
      price,
      rating,
      hasPrime,
    };
    dispatch(addToCart(product));
  };

  return (
    <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
      <p className="absolute text-xs italic text-gray-400 top-2 right-2">
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className="object-contain mx-auto"
        loading="lazy"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array.from({ length: Math.floor(rating.rate) }, (_, i) => {
          return <SolidStarIcon key={i} className="h-5 text-yellow-500" />;
        })}
        {Array.from({ length: 5 - Math.floor(rating.rate) }, (_, i) => {
          return <StarIcon key={i} className="h-5 text-yellow-500" />;
        })}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5 w12">
        <p>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>
      {hasPrime && (
        <div className="flex items-center -mt-5 space-x-2">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
            }
            width={40}
            height={40}
            alt="prime"
            className="h-auto"
          />
          <p className="text-base font-semibold text-gray-500">
            Free Next-day Delevery
          </p>
        </div>
      )}
      <button onClick={addItemToCart} className="mt-auto button">
        add to cart
      </button>
    </div>
  );
}

export default Product;
