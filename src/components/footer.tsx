import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md flex flex-col gap-6 py-6">
      <div className="container max-w-[1536px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 p-4  px-4 md:px-16">
        <Link className="flex items-center" href="/">
          <Image
            alt="Culinear"
            width={144}
            height={40}
            src="/images/logo.svg"
            className="w-36"
          />
        </Link>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link className="text-[14.38px]  md:text-lg  text-[#85C349]" href="/">
            Home
          </Link>
          <Link
            className="text-[14.38px]  md:text-lg  hover:text-[#85C349]"
            href="/markets"
          >
            Farmers Market
          </Link>
          <Link
            className="text-[14.38px]  md:text-lg  hover:text-[#85C349]"
            href="/producers"
          >
            Producers
          </Link>
          <Link
            className="text-[14.38px]  md:text-lg  hover:text-[#85C349]"
            href="/homecooks"
          >
            Home Cooks
          </Link>
          <Link
            className="text-[14.38px]  md:text-lg  hover:text-[#85C349]"
            href="/directory"
          >
            Directory
          </Link>
        </nav>
        <div className="flex gap-2">
          <Link
            target="_blank"
            className="flex items-center gap-3 p-2 border rounded-full shadow-sm"
            href="https://www.facebook.com/culineer"
          >
            <Image
              alt="Facebook"
              width={20}
              height={20}
              decoding="async"
              src="/images/facebook.svg"
              className="w-5 h-5"
            />
          </Link>
          <Link
            target="_blank"
            className="flex items-center gap-3 p-2 border rounded-full shadow-sm"
            href="https://www.instagram.com/culineerapp/?hl=en"
          >
            <Image
              alt="Instagram"
              width={20}
              height={20}
              decoding="async"
              src="/images/insta.svg"
              className="w-5 h-5"
            />
          </Link>
          <Link
            target="_blank"
            className="flex items-center gap-3 p-2 border rounded-full shadow-sm"
            href="https://x.com/"
          >
            <Image
              alt="Twitter"
              width={20}
              height={20}
              decoding="async"
              src="/images/twitter.svg"
              className="w-5 h-5"
            />
          </Link>
        </div>
      </div>
      <hr className="border-t" />
      <div className="container max-w-[1536px] mx-auto flex flex-col md:flex-row justify-between items-center text-[14.38px]  md:text-lg gap-4  px-4 md:px-16">
        <span>© 2024 Culinear. All rights reserved.</span>
        <div className="flex gap-4">
          <Link className="hover:underline" href="/terms-of-service">
            Terms &amp; Conditions
          </Link>
          <Link className="hover:underline" href="/privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
