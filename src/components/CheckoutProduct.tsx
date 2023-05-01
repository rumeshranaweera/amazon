import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/(store)/features/cartSlice";
import { removeFromCart } from "@/app/(store)/features/cartSlice";
import { motion } from "framer-motion";

function CheckoutProduct({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
  hasPrime,
}: product) {
  const dispatch = useDispatch();
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
  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <motion.div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} alt={title} />
      {/* middle */}
      <div className="col-span-3 mx-5 ">
        <p>{title}</p>
        <div className="flex">
          {Array.from({ length: Math.floor(rating.rate) }, (_, i) => {
            return <SolidStarIcon key={i} className="h-5 text-yellow-500" />;
          })}
          {Array.from({ length: 5 - Math.floor(rating.rate) }, (_, i) => {
            return <StarIcon key={i} className="h-5 text-yellow-500" />;
          })}
        </div>
        <p className="my-2 text-sm line-clamp-3">{description}</p>
        <p>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
              }
              width={40}
              height={40}
              alt="prime"
            />
            <p className="text-xs text-gray-500">Free Next-day Delevery</p>
          </div>
        )}
      </div>
      {/* Right: add/remove buttons */}
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </motion.div>
  );
}

export default CheckoutProduct;
