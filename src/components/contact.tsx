import { LocateFixed, Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="text-center p-10">
      <h1 className="text-2xl font-bold mb-7">Contact Us</h1>
      <div className="space-y-3 text-gray-500">
        <p>
          If you have any questions or need further information, feel free to
          contact us.
        </p>
        <div className="flex justify-center items-center space-x-3">
          <Phone />
          <p>
            <span className="text-primaryColor underline">
              +233-249-347-546
            </span>{" "}
            /{" "}
            <span className="text-primaryColor underline">
              +233-503-386-203
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <Mail />
          <p className="text-primaryColor underline">
            support@linkinlabs.pfsgh.com
          </p>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <LocateFixed />
          <p>Zibra Street, Pokuase, Accra</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
