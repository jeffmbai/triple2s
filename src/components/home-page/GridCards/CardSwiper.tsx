"use client";
import React from "react";
import { useSwipeable } from "react-swipeable";
import Card from "./Card";

const CardSwiper = ({ cards }: { cards: { id: number; title: string; desc: string }[] }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % cards.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length),
  });

  return (
    <div className="w-full max-w-md mx-auto"> 
      <div
        {...handlers}
        className="overflow-hidden mb-4 w-full rounded-lg"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full flex-shrink-0 px-4 py-6 "
            >
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-[#18181899]"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSwiper;
