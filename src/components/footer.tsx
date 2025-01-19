import React from "react";
import Container from "./container";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-gray-100 text-gray-500 py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div>
            <h3 className="text-lg mb-2 text-black font-semibold">
              About LinkinLabs
            </h3>
            <ul className="space-y-1">
              <li>Our story</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2 text-black font-semibold">Resources</h3>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2 text-black font-semibold">Legal</h3>
            <ul className="space-y-1">
              <li>Privacy</li>
              <li>Terms of service</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2 text-black font-semibold">
              Stay connected
            </h3>
            <ul className="flex  items-center space-x-2 mb-2">
              <li>
                <Facebook className="h-4 w-4" />
              </li>
              <li>
                <Instagram className="h-4 w-4" />
              </li>
              <li>
                <Twitter className="h-4 w-4" />
              </li>
              <li>
                <Youtube className="h-4 w-4" />
              </li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li>LinkinLabs Inc.</li>
              <li>Zibra street</li>
              <li>Pokuase,Accra</li>
              <li>support@linkinlabs.pfsgh@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-5" />
        <div className="text-center">
          <h3 className="text-black text-xl mb-2">Mobile Apps Coming Soon</h3>
          <p className="text-gray-500">
            Our mobile apps are on their way! Stay tuned for the launch and
            enjoy seamless access to our services on the go
          </p>
          <div className="flex justify-center items-center space-x-3 mt-5">
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
      </Container>
    </section>
  );
};

export default Footer;
