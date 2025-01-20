import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-1">
        <img
          src="https://linkinlabsgh.pfsgh.com/static/main/assets/images/logo.svg"
          alt="logo"
          className="w-10"
        />
        <p className="font-bold">
          Linkin{" "}
          <span className="p-2 bg-blue-200 text-blue-500 rounded-lg">Labs</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
