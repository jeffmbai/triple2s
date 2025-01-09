"use client";
import React from "react";
import AnimatedButton from "../ui/AnimatedButton";
import CardSwiper from "./GridCards/CardSwiper";
import Card from "./GridCards/Card";

export default function GridCards() {
  const cardData = [
    { id: 1, title: "SEO Optimization", desc: "Enhance your website's visibility and ranking with expert SEO strategies." },
    { id: 2, title: "Social Media", desc: "Elevate your brand and engage your audience with expert Social Media strategies." },
    { id: 3, title: "Crypto & Gaming PPC", desc: "We specialize in online gaming and crypto PPC campaigns." },
    { id: 4, title: "Paid Advertising", desc: "Maximize your ROI with targeted ad campaigns on top digital platforms." },
    { id: 5, title: "Brand Monitoring", desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring." },
    { id: 6, title: "Social Media Marketing", desc: "Grow your brand's presence with strategic social media campaigns." },
    { id: 7, title: "Paid Advertising", desc: "Maximize your ROI with targeted ad campaigns on top digital platforms." },
    { id: 8, title: "Brand Monitoring", desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring." },
    { id: 9, title: "Mobile App Development", desc: "Create custom mobile apps with seamless functionality for all devices." },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-8 py-12 lg:py-24">
      {/* Header Section */}
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-light leading-tight sm:leading-[48px] lg:leading-[72px] mb-8">
        Strategic Solutions for Crypto/AI Businesses
      </h1>

      {/* Conditional Rendering for Mobile/Desktop Views */}
      <div className="block lg:hidden">
        <CardSwiper cards={cardData} />
      </div>
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 lg:mt-24 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <p className="text-center lg:text-left text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed sm:leading-9">
          Need custom service that aligns with your business objectives? Get a quote.
        </p>
        <AnimatedButton variant="bordered" hidden={false} />
      </div>
    </section>
  );
}