"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  "https://links.papareact.com/gi1",
  "https://links.papareact.com/6ff",
  "https://links.papareact.com/7ma",
];

function Banner() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageIndex, SetImageIndex] = useState(0);
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    if (newDirection < 0) {
      if (imageIndex === 0) {
        SetImageIndex(images.length - 1);
      } else {
        SetImageIndex(imageIndex - 1);
      }
    }
    if (newDirection > 0) {
      if (imageIndex === images.length - 1) {
        SetImageIndex(0);
      } else {
        SetImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 z-20 bottom-0" />
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          loading="lazy"
          className="object-cover h-full w-full object-top"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="absolute right-0 top-[calc(50%_-_20px)] w-10 h-10 bg-white rounded-full text-center select-none text-3xl"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute left-0 top-[calc(50%_-_20px)] w-10 h-10 bg-white rounded-full text-center select-none text-3xl rotate-180"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>
    </div>
  );
}

export default Banner;
