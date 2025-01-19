import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Container from "./container";

const HeroSection = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="pt-20">
          <h1 className="text-2xl mb-2 font-semibold">
            The Future of Laboratory Requests.
          </h1>
          <p className="mb-3 text-gray-500">
            Easily request, manage, and track laboratory test with our
            user-friendly platform
          </p>
          <div className="flex items-center space-x-3 my-5">
            <Link href="/register">
              <Button className="">Get started</Button>
            </Link>
            <p>or</p>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>

          <div>
            <p className="mb-2 text-gray-500">
              Coming soon on Apple and Android
            </p>
            <div className="flex items-center space-x-3">
              <button>
                <img
                  src="https://linkinlabsgh.pfsgh.com/static/main/assets/images/appstore-apple.svg"
                  alt="app-store"
                  className="w-32"
                />
              </button>
              <button>
                <img
                  src="https://linkinlabsgh.pfsgh.com/static/main/assets/images/appstore-android.svg"
                  alt="google-play"
                  className="w-32"
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://linkinlabsgh.pfsgh.com/static/main/assets/images/peakpx.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="w-full h-[500px]"
          />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
