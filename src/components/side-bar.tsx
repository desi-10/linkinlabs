import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, LogOut } from "lucide-react";
import Logo from "./logo";

const SideBar = () => {
  return (
    <section className="col-span-2 h-screen py-7 border-r mr-6">
      <div className="h-full grid">
        <div>
          <Logo />

          <div className="mt-5 flex-col">
            <div>
              <Link href="/">
                <Button variant="link" className="p-0">
                  <ChevronLeft />
                  Back to Landing Page
                </Button>
              </Link>
            </div>
            <div className="mt-3 divide-y">
              <p className="border-l-2 border-primaryColor p-2 bg-gray-200 transition-all duration-300 hover:bg-primaryColor hover:text-white">
                <Link href="/dashboard">Dashboard</Link>
              </p>
              <p className="p-2 transition-all duration-300 hover:bg-primaryColor hover:text-white">
                <Link href="/dashboard/profile">Profile</Link>
              </p>
              <p className="p-2 transition-all duration-300 hover:bg-primaryColor hover:text-white">
                <Link href="/dashboard/tests">Available tests</Link>
              </p>
              <p className="p-2 transition-all duration-300 hover:bg-primaryColor hover:text-white">
                <Link href="/profile">My requests</Link>
              </p>
              <p className="p-2 transition-all duration-300 hover:bg-primaryColor hover:text-white">
                <Link href="/profile">Transactions</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Button
            variant="destructive"
            className="flex items-center space-x-3 mr-7"
          >
            <LogOut />
            <p>Logout</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
