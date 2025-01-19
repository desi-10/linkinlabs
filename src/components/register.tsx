import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Asterisk, ChevronLeft } from "lucide-react";
import { Input } from "./ui/input";

const Register = () => {
  return (
    <form className="w-full flex justify-center items-center p-10">
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
          <h2 className="text-xl mb-5 text-center">Create an account</h2>

          <div className="space-y-3 mb-5">
            <div className="space-y-1">
              <div className="flex">
                <p>Username</p>
                <Asterisk className="text-red-500 h-3 w-3" />
              </div>
              <Input type="text" className="w-full" />
              <p className="text-sm">
                Required 150 characters or letters, digits and @/+/-/_ only
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex">
                <p>Email</p>
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
              <ul className="text-sm list-disc list-inside">
                <li>
                  Your password cant be too similar to your other personal
                  information
                </li>
                <li>Password must container at least * characters</li>
                <li>Your password cant be commly used password</li>
                <li>Password cant be entirely numeric</li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex">
                <p>Confirm Password</p>
                <Asterisk className="text-red-500 h-3 w-3" />
              </div>
              <Input type="password" className="w-full" />
            </div>
          </div>
          <Button className="w-full mb-5">Register</Button>
          <Link href="/login">
            <p className="text-center text-blue-500">Login</p>
          </Link>
        </div>
      </section>
    </form>
  );
};

export default Register;
