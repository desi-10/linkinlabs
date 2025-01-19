import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-100">
      <Container>
        <section className="grid grid-cols-7">
          <div className="col-span-2 h-screen py-7 border-r mr-4">
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

            <div className="mt-5 flex-col">
              <div>
                <Link href="/">
                  <Button variant="link" className="p-0">
                    <ChevronLeft />
                    Back to Landing Page
                  </Button>
                </Link>
              </div>
              <div className="mt-3 space-y-3">
                <p className="border-l-2 border-primaryColor p-2 bg-gray-200">
                  <Link href="/dashboard">Dashboard</Link>
                </p>
                <p>
                  <Link href="/profile">Profile</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 h-screen overflow-auto">
            <div className="flex justify-between items-center py-7">
              <h1 className="text-xl">
                Hello, <span className="font-bold">Username</span>
              </h1>
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
            </div>
            {children}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default DashboardLayout;
