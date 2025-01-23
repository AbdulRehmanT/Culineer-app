"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function SecondSection() {
  return (
    <div className="max-w-4/5 xl:container xl:mx-auto">
      <section className="relative m-5 flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#F3F9ED] p-10 md:m-20 lg:flex-row lg:gap-[25px] xl:gap-0 pl-0 pr-0 sm:pl-10">
        <div className="flex flex-col gap-4 text-left lg:px-0 lg:w-[50%] order-1 px-8 lg:pl-10 xl:pl-14">
          <span className="w-fit rounded-full bg-[#E5F3D4] py-3 px-5 text-[14.38px] font-semibold text-[#548828] sm:text-lg">
            For Business
          </span>
          <h1 className="mt-2 text-[46.32px] font-semibold leading-tight tracking-tight md:leading-none md:tracking-normal text-[#20202099] md:text-6xl">
            Food <span className="text-[#85C349]">Producers</span>
            <br /> &amp; <span className="text-black">Markets</span>
          </h1>
          <p className="mt-4   text-sm text-[#202020] md:text-lg">
            Capture leads, engage customers ane track your marketing efforts
            with limited to no marketing expertise. Culineer makes it growing
            your business easy!
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-[14.38px] md:text-lg">
              <span className="rounded-full bg-[#85C349] p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              Increase sales and improve profits.
            </li>
            <li className="flex items-center gap-3 text-[14.38px] md:text-lg">
              <span className="rounded-full bg-[#85C349] p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              Streamline marketing and track results with data.
            </li>
          </ul>
          <Link href="/regBusiness">
            <Button className="shadow-md bg-[#85C349] text-white hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold px-6 py-6 rounded-full mt-6 ">
              Upgrade to a Professional Account
            </Button>
          </Link>
        </div>

        <div className="relative flex flex-col order-2 items-end">
          <Image
            alt="Producer"
            src="/images/businessMacbook.svg"
            width={550}
            height={200}
            className="w-[90%] sm:w-auto lg:w-[90%]"
            priority
          />
          <Image
            alt="Producer"
            src="/images/macbookBottomRight.svg"
            width={630}
            height={300}
            priority
          />
        </div>
      </section>

      <section className="relative m-5 flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#F3F9ED] p-10 md:m-20 lg:flex-row lg:gap-[25px] xl:gap-0 pr-0 pl-0 sm:pr-10">
        <div className="flex flex-col gap-4 px-4 text-left lg:px-0 lg:w-[50%] order-2 sm:pl-[3.25rem] md:pl-20 lg:pl-0 lg:pr-20 xl:pr-14">
          <span className="w-fit rounded-full bg-[#E5F3D4] py-3 px-5 text-[14.38px] font-semibold text-[#548828] sm:text-lg">
            For Consumers
          </span>
          <h1 className="mt-2 text-[46.32px] font-semibold leading-tight tracking-tight md:leading-none md:tracking-normal text-[#20202099] md:text-6xl">
            Home <span className="text-[#85C349]">Cooks</span> &amp; <br />{" "}
            <span className="text-black">Chefs</span>
          </h1>
          <p className="mt-4 w-[90%] text-[14.38px] text-[#202020] md:text-lg">
            Find local producers in your area, get reminders to go to market,
            know what's available each week. Learn about ingredients and growing
            practices, be inspired by new recipes.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-[14.38px] md:text-lg">
              <span className="rounded-full bg-[#85C349] p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              Easier access to local ingredients.
            </li>
            <li className="flex items-center gap-3 text-[14.38px] md:text-lg">
              <span className="rounded-full bg-[#85C349] p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              Improved eating habits and confidence in food quality.
            </li>
          </ul>
          <Link href="/auth/join-culineer">
            <Button className="shadow-md bg-[#85C349] text-white hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold px-6 py-6 rounded-full mt-6 w-fit">
              Join the Culineer Community.
            </Button>
          </Link>
        </div>

        <div className="relative flex flex-col order-1 items-start">
          <Image
            alt="Producer"
            src="/images/consumerMacbook.svg"
            width={550}
            height={200}
            className="w-[90%] sm:w-auto lg:w-[90%]"
            priority
          />
          <Image
            alt="Producer"
            src="/images/macbookBottomLeft.svg"
            width={630}
            height={300}
            priority
          />
        </div>
      </section>
    </div>
  );
}
