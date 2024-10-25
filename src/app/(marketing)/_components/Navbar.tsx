import BrandLogo from "@/components/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full z-10 bg-gray-100">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href={"/"} className="mr-auto">
          <BrandLogo />
        </Link>

        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="/#pricing" className="text-lg">
          Pricing
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link href={"/dashboard"}>Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
