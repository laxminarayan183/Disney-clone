import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-gray-500 gap-4 md:gap-48 p-8 px-5 md:px-16 leading-8 mb-10">
        <div>
          <h2 className="text-white font-bold">Company</h2>
          <h3>About us</h3>
          <h3>Careers</h3>
          <p>2024 STAR.All Rights Reserved.</p>
        </div>
        <div>
          <h2 className="text-white font-bold">Need Help ?</h2>
          <h3>visit helpcenter</h3>
          <h3>share feedback</h3>
        </div>
        <div>
          <h2 className="text-white font-bold">View website in</h2>
          <h3>English</h3>
        </div>

        <div>
          <h2 className="text-white font-bold">Connect with us</h2>
          <div className="flex gap-4">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
