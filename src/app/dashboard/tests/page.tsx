import { Button } from "@/components/ui/button";
import React from "react";

const Tests = () => {
  return (
    <section className="border p-5 rounded-lg">
      <h3 className="text-lg mb-5 font-semibold">FDA / GSA Standard Tests</h3>

      <div className="grid grid-cols-3">
        <div className="border p-5 rounded-lg space-y-2">
          <h5 className="font-semibold">Additives</h5>
          <p className="text-sm">
            <span>Price range: </span>
            GHC 165.00 - GHC 385.00
          </p>
          <div className="flex space-x-3">
            <Button size="sm" className="w-full">
              Request Test
            </Button>
            <Button
              size="sm"
              className="w-full bg-green-500 hover:bg-green-300"
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tests;
