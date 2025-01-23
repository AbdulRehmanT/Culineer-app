"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Testimonials() {
  const reviews = [
    {
      image: "/images/review1.png",
      alt: "Client Review 1",
      name: "Ryan Ekstrom Bothman",
      company: "Farmer",
      logo: "/images/userLogo2.png",
    },
    {
      image: "/images/review2.png",
      alt: "Client Review 1",
      name: "Ryan Ekstrom Bothman",
      company: "Farmer",
      logo: "/images/userLogo2.png",
    },
    {
      image: "/images/review3.png",
      alt: "Client Review 2",
      name: "Cheryl Bailey",
      company: "",
      logo: "/images/userLogo3.png",
    },
    {
      image: "/images/review3.png",
      alt: "Client Review 3",
      name: "Marina Key",
      company: "",
      logo: "/images/userLogo4.png",
    },
    {
      image: "/images/review4.png",
      alt: "Client Review 4",
      name: "Andrew Stanley",
      company: "",
      logo: "/images/userLogo4.png",
    },
    {
      image: "/images/review5.png",
      alt: "Client Review 5",
      name: "Andrew Stanley",
      company: "",
      logo: "/images/userLogo5.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < reviews.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(reviews.length - 1);
    }
  };

  return (
    <div className="flex min-h-[774px] flex-col gap-8 bg-[#F3F9ED] py-20 px-4 sm:px-6 lg:px-16">
      <div className="my-auto flex flex-col gap-12 text-center">
        <h1 className="text-[38.33px] font-semibold leading-tight tracking-tight md:text-5xl md:leading-none md:tracking-normal">
          See what our <span className="text-[#85C349]">Clients</span> Said
          about us
        </h1>
        <p className="mt-3 text-[14px] text-[#6B6B6B] md:text-base">
          Join the Culineer community and see for yourself
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-300"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] px-2 rounded-xl">
                <div className="flex flex-col gap-4 bg-white border-full shadow-lg">
                  <div className="relative h-[250px]">
                    <Image
                      alt={review.alt}
                      width={350}
                      height={40}
                      src={review.image}
                    />
                  </div>
                  <div className="">
                    <p className="text-[16px] md:text-[18px] font-medium text-[#202020] line-clamp-4 px-4">
                      "Ordering from Culineer is always a breeze. Their website
                      is user-friendly, and my purchases arrive quickly!"
                    </p>
                    <div className="flex items-center gap-4 px-4">
                      <Image
                        alt={review.alt}
                        src={review.logo}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-[15.97px] md:text-xl">
                          {review.name}
                        </h3>
                        {review.company && (
                          <p className="text-[12.78px] text-[#6B6B6B]">
                            {review.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Button
            className="text-white bg-[#85C349] hover:bg-[#6fa240] rounded-full px-4 py-2"
            onClick={handleNext}
          >
            Next
          </Button>
          <Button
            className="text-white bg-[#85C349] hover:bg-[#6fa240] rounded-full px-4 py-2"
            onClick={handlePrev}
          >
            Previous
          </Button>
        </div>
      </div>
    </div>
  );
}
