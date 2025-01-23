"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="container mx-auto relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        alt="gradient"
        src="/images/gradientbg.svg"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 z-30 w-full"
      />

      <div className="container mx-auto">
        <div className="relative">
          <div className="absolute top-16 left-1/2 z-10 -translate-x-1/2 transform">
            <div className="relative rounded-full border p-14 lg:p-20">
              <div className="rounded-full border p-14 lg:p-20">
                <div className="h-[32rem] w-[32rem] rounded-full bg-[#F3FAEB] lg:h-[40rem] lg:w-[40rem]"></div>
              </div>
              <Image
                alt="Hero Background"
                src="/images/user1.svg"
                width={300}
                height={300}
                className="absolute top-[13px] -left-[15%]"
                priority
              />
              <Image
                alt="Hero Background"
                src="/images/user2.svg"
                width={300}
                height={300}
                className="absolute -top-[3%] -right-[10%] lg:-right-[24%]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto flex flex-col items-center pt-28 text-center lg:pt-36">
          <h1 className="max-md:contaier max-md:max-auto relative text-6xl font-semibold leading-tight tracking-tighter">
            Discover and<span className="text-[#85C349]"> Support</span>
            <br />
            Your<span className="text-[#85C349]"> Local Food</span> Heroes
            <Image
              alt="arrow"
              src="/images/star.svg"
              width={40}
              height={40}
              className="absolute -top-4 xs:left-16"
              priority
            />
          </h1>
          <p className="mx-auto mt-4 w-96 text-sm font-medium text-[#767A85] sm:text-base">
            Connecting consumers with local food producers for a healthier,
            sustainable future.
          </p>
          <div className="relative mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <Link href="/auth/join-consumer">
              <Button className="bg-white text-black shadow-md hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold px-6 py-6 rounded-full">
                Join as a Consumer
              </Button>
            </Link>
            <Link href="/upgrade-your-business">
              <Button className="shadow-md bg-[#85C349] text-white hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold px-6 py-6 rounded-full">
                Upgrade Your Business
              </Button>
            </Link>
            <Image
              alt="arrow"
              src="/images/arrow.svg"
              width={70}
              height={70}
              className="absolute -top-7 -right-20"
              priority
            />
          </div>

          <div className="mt-10 flex justify-center space-x-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-gray-500 text-sm">Total Producers</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>

          <div className="relative mt-10 rounded-t-xl bg-white p-2 pb-0 shadow-lg">
            <Image
              alt="Hero2"
              src="/images/image2.svg"
              width={120}
              height={120}
              className="absolute -top-8 -left-[5.25rem] z-10"
              priority
            />
            <Image
              alt="Hero2"
              src="/images/image1.svg"
              width={120}
              height={120}
              className="absolute -top-12 -right-12 -z-10"
              priority
            />
            <Image
              alt="Hero Background"
              src="/images/user3.svg"
              width={235}
              height={193}
              className="absolute -top-40 -right-32 -z-10 lg:-top-48 lg:-right-40"
              priority
            />
            <Image
              alt="Hero"
              src="/images/hero1.svg"
              width={500}
              height={500}
              className="w-[39rem] lg:w-[55rem]"
              priority
            />
            <div className="bg-white p-3 w-fit shadow-lg rounded-lg absolute top-20 -left-32">
              <div className="flex justify-center items-center gap-2">
                <Image
                  alt="Culinear"
                  src="/images/title1.svg"
                  width={40}
                  height={40}
                  className="order-1"
                  priority
                />
                <div className="text-start order-2">
                  <h1 className="text-xs font-semibold">
                    Mountain Mushroom Growers
                  </h1>
                  <p className="text-gray-500 text-[10px]">
                    Artisanal mushrooms
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 w-fit shadow-lg rounded-lg absolute top-32 -right-16">
              <div className="flex justify-center items-center gap-2">
                <Image
                  alt="Culinear"
                  src="/images/title2.svg"
                  width={40}
                  height={40}
                  className="order-2"
                  priority
                />
                <div className="text-start order-1">
                  <h1 className="text-xs font-semibold">Bok Choy</h1>
                  <p className="text-gray-500 text-[10px]">267 results found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

