"use client";

import Image from "next/image";

export default function ReviewSection() {
  return (
    <div className="container mx-auto flex items-center justify-center bg-white py-24 text-gray-800 lg:min-h-[774px]">
      <div className="relative flex w-4/5 flex-col md:px-4 lg:text-justify xl:w-3/5">
        <div className="mb-6">
          <Image
            alt="Culinear"
            src="/images/quote.svg"
            width={200}
            height={200}
            className="absolute -top-10 -left-5 z-10"
            priority
          />
        </div>
        <h1 className="z-20 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Culineer is on a{" "}
          <span className="text-gray-500"> mission to build</span> a more
          sustainable{" "}
          <span className="font-bold text-[#85C349]"> world by making</span>{" "}
          iteasy <span className="text-gray-500"> for people</span> to
          eat locally-produced foods.
        </h1>
        <div className="my-8 flex items-center gap-2">
          <Image
            alt="Culinear"
            src="/images/Ellipse 1.svg"
            width={60}
            height={60}
            priority
          />
          <div className="text-start">
            <h1 className="text-[17.57px] font-semibold md:text-xl">
              Jodi Doe
            </h1>
            <p className="text-[12.78px] text-[#0D1000] md:text-lg">
              CEO and Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
