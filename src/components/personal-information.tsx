import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PersonalInformation = () => {
  return (
    <section>
      <h3 className="text-lg mb-5 font-semibold">Personal Information</h3>

      <form className="space-y-3">
        <div>
          <p>Email</p>
          <Input type="email" className="" />
        </div>
        <div>
          <p>Username</p>
          <Input type="text" className="" />
        </div>
        <Button>Update Information</Button>
      </form>
    </section>
  );
};

export default PersonalInformation;
