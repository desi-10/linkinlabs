import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Container from "./container";

const Navbar = () => {
  return (
    <Container>
      <section className="hidden lg:flex justify-between items-center py-7">
        <div className="flex items-center space-x-1">
          <img
            src="https://linkinlabsgh.pfsgh.com/static/main/assets/images/logo.svg"
            alt="logo"
            className="w-10"
          />
          <p className="font-bold">
            Linkin{" "}
            <span className="p-2 bg-blue-200 text-blue-500 rounded-lg">
              Labs
            </span>
          </p>
        </div>
        <ul className="flex justify-between items-center space-x-3">
          <Link href="#features">Features</Link>
          <Link href="#benefits">Benefits</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#contact">Contact</Link>
        </ul>
        <ul className="flex justify-between items-center space-x-3">
          <li>
            <Facebook className="h-5 w-5 text-black" />
          </li>
          <li>
            <Twitter className="h-5 w-5 text-black" />
          </li>
          <li>
            <Instagram className="h-5 w-5  text-black" />
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default Navbar;
