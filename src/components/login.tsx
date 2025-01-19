import { Asterisk, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Login = () => {
  return (
    <form className="h-screen w-full flex justify-center items-center">
      <section>
        <Link href="/">
          <Button variant="link" className="flex items-center space-x-3 mb-3">
            <ChevronLeft className="h-5 w-5" />
            <p>Home</p>
          </Button>
        </Link>
        <div className="shadow-lg rounded-lg p-5 w-[350px]">
          <div className="flex justify-center ">
            <img
              src="https://linkinlabsgh.pfsgh.com/static/main/assets/images/logo.svg"
              alt="logo"
              className="w-24"
            />
          </div>
          <h2 className="text-xl mb-5 text-center">Welcome to LinkinLabs</h2>

          <div className="space-y-3 mb-5">
            <div className="space-y-1">
              <div className="flex">
                <p>Username</p>
                <Asterisk className="text-red-500 h-3 w-3" />
              </div>
              <Input type="text" className="w-full" />
            </div>
            <div className="space-y-1">
              <div className="flex">
                <p>Password</p>
                <Asterisk className="text-red-500 h-3 w-3" />
              </div>
              <Input type="password" className="w-full" />
            </div>
          </div>
          <Button className="w-full mb-5">Sign in to account</Button>
          <Link href="/register">
            <p className="text-center text-blue-500">Register</p>
          </Link>
        </div>
      </section>
    </form>
  );
};

export default Login;
