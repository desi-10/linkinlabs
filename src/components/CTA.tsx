import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="bg-primaryColor text-white text-center p-10">
      <h1 className="text-2xl font-bold">
        Get Started with Our Comprehensive Testing Services!
      </h1>
      <p className="px-20 text-lg mt-3">
        Sign up today to access customized and fixed tests for your products.
        Ensure quality and <br /> compliance with ease. Join us and experience
        seamless testing and reliable results.
      </p>
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          className="hover:bg-primaryColor p-6 text-primaryColor"
        >{`Sign Up Now - It's FREE`}</Button>
      </div>
    </div>
  );
};

export default CTA;
