import { LucideSettings, Rocket, Target } from "lucide-react";
import React from "react";
import Container from "./container";

const Services = () => {
  const data = [
    {
      icon: <Target className="h-16 w-16" />,
      title: "Seamless Experience",
      description:
        "Our platform is designed for ease of use, ensuring a smooth process from test request to results delivery.",
    },
    {
      icon: <Rocket className="h-16 w-16" />,
      title: "Fast and Reliable",
      description:
        "Get your tests processed quickly with reliable results you can trust.",
    },
    {
      icon: <LucideSettings className="h-16 w-16" />,
      title: "Customizable Services",
      description:
        "Choose from a variety of tests and services tailored to your needs.",
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="text-2xl text-center py-5">Why Choose LinkinLabs</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center py-20">
          {data.map((item, index) => {
            return (
              <div key={index} className="text-center space-y-1">
                <p className="flex justify-center items-center text-blue-500">
                  {item.icon}
                </p>
                <p className="font-bold">{item.title}</p>

                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Services;
