import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const OtherDetails = () => {
  return (
    <section>
      <h3 className="text-lg mb-5 font-semibold">Other Details</h3>

      <form className="space-y-3">
        <div>
          <p>First Name</p>
          <Input type="email" className="" />
        </div>
        <div>
          <p>Last Name</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>Street Address 1</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>Street Address 2</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>Phone Number</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>City</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>Company</p>
          <Input type="text" className="" />
        </div>
        <Button>Update Details</Button>
      </form>
    </section>
  );
};

export default OtherDetails;
