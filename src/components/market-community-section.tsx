"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MarketCommunitySection() {
  return (
    <div
      className="relative max-h-[774px] min-h-[774px] max-w-[1536px] mx-auto flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-0 right-0 top-28 z-10 mx-auto max-w-2xl text-center w-full">
        <h2 className="text-lg leading-tight tracking-tight md:leading-none md:tracking-normal md:text-5xl font-semibold">
          Start building your{" "}
          <span className="text-[#85C349]">market community</span> today.
        </h2>
        <p className="mt-8 xs:px-3 text-[12.78px] md:text-base text-[#767A85]">
          Explore the best reviews we got from out clients.
        </p>
        <Link href="/regBusiness">
          <Button className="shadow-md bg-[#85C349] text-white hover:scale-105 transition-all duration-300 text-[12.78px] md:text-base font-semibold px-6 rounded-full mt-20">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="relative w-[1560px]">
        <Image
          alt="Community"
          src="/images/market1.svg"
          width={231}
          height={620}
          className="absolute -bottom-[860px] left-20 translate-x-[-50%] transform"
        />
        <Image
          alt="Salad"
          src="/images/market2.svg"
          width={153}
          height={581}
          className="absolute -bottom-96 left-[220px]"
        />
        <Image
          alt="Vegetable"
          src="/images/market3.svg"
          width={370}
          height={473}
          className="absolute -bottom-96 left-[410px]"
        />
        <Image
          alt="Fruit"
          src="/images/market4.svg"
          width={259}
          height={452}
          className="absolute -bottom-96 right-[355px] translate-x-[-50%] transform"
        />
        <Image
          alt="Vegetable"
          src="/images/market5.svg"
          width={240}
          height={560}
          className="absolute -bottom-96 right-[212px]"
        />
        <Image
          alt="Cook"
          src="/images/market6.svg"
          width={240}
          height={600}
          className="absolute -bottom-[630px] right-16 translate-x-[50%] transform"
        />
      </div>
    </div>
  );
}
