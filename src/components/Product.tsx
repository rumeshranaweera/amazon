"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

function Product({
  id,
  title,
  category,
  description,
  image,
  price,
  rating: { rate },
}: product) {
  const [hasPrime] = useState(Math.random() > 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
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
        {Array.from({ length: Math.floor(rate) }, (_, i) => {
          return <SolidStarIcon key={i} className="h-5 text-yellow-500" />;
        })}
        {Array.from({ length: 5 - Math.floor(rate) }, (_, i) => {
          return <StarIcon key={i} className="h-5 text-yellow-500" />;
        })}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5 w12">
        <p>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 ">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
            }
            width={40}
            height={40}
            alt="prime"
          />
          <p className="text-base font-semibold text-gray-500">
            Free Next-day Delevery
          </p>
        </div>
      )}
      <button className="mt-auto button">add to cart</button>
    </div>
  );
}

export default Product;
