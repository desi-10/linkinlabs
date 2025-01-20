import OtherDetails from "@/components/other-details";
import PersonalInformation from "@/components/personal-information";
import SocialMedia from "@/components/social-media";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="p-3 border rounded-lg h-fit">
        <PersonalInformation />
      </div>
      <div className="p-3 border rounded-lg h-fit">
        <OtherDetails />
      </div>
      <div className="col-span-2 p-3 border rounded-lg h-fit">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ProfilePage;
