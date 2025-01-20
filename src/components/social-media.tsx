import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SocialMedia = () => {
  return (
    <section>
      <h3 className="text-lg mb-5 font-semibold">Social Media Presence</h3>

      <form className="space-y-3">
        <div>
          <p>Facebook</p>
          <Input type="email" className="" />
        </div>
        <div>
          <p>Instagram</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>Twitter</p>
          <Input type="text" className="" />
        </div>
        <div>
          <p>Tiktok</p>
          <Input type="text" className="" />
        </div>
        <Button>Update Social Medial</Button>
      </form>
    </section>
  );
};

export default SocialMedia;
