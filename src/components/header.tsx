"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Function to check if the current link is active
  const isActive = (link: string) => {
    return pathname === link ? "text-[#85C349] font-bold" : "text-gray-700";
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the Left */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.svg"
                alt="Culineer"
                width={120}
                height={45}
              />
            </Link>
          </div>

          {/* Center Navigation Links for Desktop */}
          <div className="hidden md:flex justify-center gap-6">
            <Link href="/" className={`py-2 ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/farmers-market" className={`py-2 ${isActive("/farmers-market")}`}>
              Farmers Market
            </Link>
            <Link href="/producers" className={`py-2 ${isActive("/producers")}`}>
              Producers
            </Link>
            <Link href="/home-cooks" className={`py-2 ${isActive("/home-cooks")}`}>
              Home Cooks
            </Link>
            <Link href="/directory" className={`py-2 ${isActive("/directory")}`}>
              Directory
            </Link>
          </div>

          {/* Right Section: Sign-up Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              className="items-center gap-2 border rounded-full"
            >
              Sign up
              <ChevronDown className="h-4 w-4" />
            </Button>
            {/* Mobile Menu (using Sheet component for sliding menu) */}
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Button className="bg-[#85C349] rounded-full">
                <Image src="/images/category-2.png" alt="menu" width={16} height={16}/>
                </Button>
              </SheetTrigger>

              {/* Sheet Content for Mobile Menu */}
              <SheetContent>
                <div className="flex flex-col gap-4 p-4">
                  <Link href="/" className={`py-2 ${isActive("/")}`}>
                    Home
                  </Link>
                  <Link href="/farmers-market" className={`py-2 ${isActive("/farmers-market")}`}>
                    Farmers Market
                  </Link>
                  <Link href="/producers" className={`py-2 ${isActive("/producers")}`}>
                    Producers
                  </Link>
                  <Link href="/home-cooks" className={`py-2 ${isActive("/home-cooks")}`}>
                    Home Cooks
                  </Link>
                  <Link href="/directory" className={`py-2 ${isActive("/directory")}`}>
                    Directory
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
