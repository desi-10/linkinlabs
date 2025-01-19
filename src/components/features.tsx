import React from "react";
import Container from "./container";
import { Button } from "./ui/button";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

const PlatformFeatures = () => {
  const data = [
    {
      title: " Advanced Analytics",
      description:
        "Track your test requests and results with our comprehensive analytics tools.",
    },
    {
      title: "Secure Data",
      description:
        "Your data is safe with us. We employ the latest security measures to protect your information.",
    },
    {
      title: "Easy Scheduling",
      description: "Schedule your test at a time that is convenient for you.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-16">
      <Container>
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-8">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full flex justify-center">
            <div className="">
              <img src="" alt="Phone Mockup" className="w-full h-[500px]" />
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-6">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-5"
                  >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                    <Link href="/features">
                      <Button variant="link" className="p-0 group/name">
                        <p>Learn more</p>
                        <LucideArrowRight className="" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Link href="/features">
          <div className="flex justify-center mt-20">
            <Button variant="outline" className="p-6">
              View all features
            </Button>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default PlatformFeatures;
