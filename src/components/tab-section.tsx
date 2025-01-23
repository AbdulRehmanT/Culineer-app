"use client";
import { useState } from "react";
import Image from "next/image";

export default function TabSection() {
  const [selectedTab, setSelectedTab] = useState("Producer");
  const [prevTab, setPrevTab] = useState("Producer");

  const handleTabChange = (tab: string) => {
    setPrevTab(selectedTab); // Set previous tab before updating the current tab
    setSelectedTab(tab);
  };

  return (
    <div className="relative my-16">
      {/* Background Circle */}
      <div className="absolute left-1/2 top-16 -z-10 -translate-x-1/2 transform">
        <div className="h-[32rem] w-[32rem] rounded-full bg-[#F3FAEB]" />
      </div>

      {/* Main Content */}
      <div className="mx-auto flex flex-col gap-10 px-5">
        {/* Heading */}
        <div className="mx-auto pt-4 text-center sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <h1 className="text-[38.33px] font-semibold leading-tight tracking-tight md:text-5xl md:leading-none md:tracking-normal">
            <span className="text-[#85C349]">Connecting Farmers</span> and Home
            Cooks for a Thriving Food{" "}
            <span className="text-[#85C349]">Community!</span>
          </h1>
          <p className="mt-3 text-[12.78px] text-[#767A85] md:text-lg">
            A platform that connects farmers, producers, and home cooks to
            promote local, sustainable food.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto flex w-[80%] text-center font-medium sm:w-[80%] md:w-[60%] lg:w-[40%]">
          <span
            className={`w-full cursor-pointer pb-2 text-[12.78px] md:text-lg border-b-2 ${
              selectedTab === "Producer"
                ? "border-[#6EAC36] text-[#6EAC36]"
                : "border-transparent text-black"
            }`}
            onClick={() => handleTabChange("Producer")}
          >
            Producer
          </span>
          <span
            className={`w-full cursor-pointer pb-2 text-[12.78px] md:text-lg border-b-2 ${
              selectedTab === "Farmer"
                ? "border-[#6EAC36] text-[#6EAC36]"
                : "border-transparent text-black"
            }`}
            onClick={() => handleTabChange("Farmer")}
          >
            Farmer
          </span>
          <span
            className={`w-full cursor-pointer pb-2 text-[12.78px] md:text-lg border-b-2 ${
              selectedTab === "Home Cook"
                ? "border-[#6EAC36] text-[#6EAC36]"
                : "border-transparent text-black"
            }`}
            onClick={() => handleTabChange("Home Cook")}
          >
            Home Cook
          </span>
        </div>

        {/* Slider Section with Animated Content */}
        <div
          className={`relative flex items-center justify-center transition-all duration-500 ${
            selectedTab === "Producer" && prevTab !== "Producer"
              ? "animate-slide-left-to-right"
              : selectedTab === "Farmer" && prevTab !== "Farmer"
              ? "animate-slide-left-to-right"
              : selectedTab === "Home Cook" && prevTab !== "Home Cook"
              ? "animate-slide-left-to-right"
              : prevTab === "Producer" && selectedTab === "Farmer"
              ? "animate-slide-right-to-left"
              : prevTab === "Farmer" && selectedTab === "Home Cook"
              ? "animate-slide-right-to-left"
              : prevTab === "Home Cook" && selectedTab === "Producer"
              ? "animate-slide-right-to-left"
              : ""
          }`}
        >
          <div className="relative mx-auto w-[80%] sm:w-[80%] md:w-[80%] lg:w-[70%]">
            {/* Background Image */}
            <Image
              src={
                selectedTab === "Producer"
                  ? "/images/producer.svg"
                  : selectedTab === "Farmer"
                  ? "/images/farmer.svg"
                  : "/images/homecook.svg"
              }
              alt="Background"
              width={600}
              height={400}
              className="w-full object-contain"
            />

            {/* Foreground Image */}
            <Image
              src={
                selectedTab === "Producer"
                  ? "/images/producercard.svg"
                  : selectedTab === "Farmer"
                  ? "/images/farmercard.svg"
                  : "/images/homecookcard.svg"
              }
              alt="Foreground Left"
              width={280}
              height={250}
              className="absolute -left-8 top-10 z-10 w-[40%] sm:-left-14 md:-left-28 md:top-24 md:w-[35%] lg:-left-32 lg:top-[12rem] lg:w-[40%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
