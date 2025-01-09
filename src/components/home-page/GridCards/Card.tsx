import React from "react";
import Image from "next/image";

type CardProps = {
  card: {
    id: number;
    title: string;
    desc: string;
  };
};

const Card: React.FC<CardProps> = ({ card }) => (
  <div className="p-6 bg-[#18181899] text-white rounded-lg">
    <div className="mb-4 relative h-48 w-full sm:hidden">
      <Image
        src="/blog/blogone.svg"
        alt={`${card.title} illustration`}
        fill
        className="object-cover rounded"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
    <p className="text-base text-gray-300">{card.desc}</p>
  </div>
);

export default Card;
