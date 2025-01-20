import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const DashboardHeader = () => {
  return (
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
  );
};

export default DashboardHeader;
