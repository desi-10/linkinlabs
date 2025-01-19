import {
  CircleGauge,
  CreditCard,
  FastForward,
  TestTubes,
  UserPlus,
} from "lucide-react";
import React from "react";
import Container from "./container";

const HowItWorks = () => {
  const data = [
    {
      icon: <UserPlus className="h-7 w-7" />,
      title: "Create an account",
      description: "Sign up and get started",
    },
    {
      icon: <CircleGauge className="h-7 w-7" />,
      title: "Visit the user dashboard",
      description: "Place a request from your dashboard",
    },
    {
      icon: <TestTubes className="h-7 w-7" />,
      title: "Choose test type",
      description: "Choose the type of test you need",
    },
    {
      icon: <FastForward className="h-7 w-7" />,
      title: "Sample delivery",
      description: "Choose personal delivery or courier service",
    },
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: "Make payment",
      description: "Proceed to secure payment",
    },
    {
      icon: "icon",
      title: "Track your order",
      description: "Follow your order status",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 p-5">
      <Container>
        <h1 className="text-2xl text-center my-5">How it works</h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center py-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="text-center space-y-1">
                <p className="flex justify-center items-center text-blue-500">
                  {item.icon}
                </p>
                <div className="flex justify-center items-center space-x-2 font-bold">
                  <p>{index + 1}.</p>
                  <p>{item.title}</p>
                </div>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
