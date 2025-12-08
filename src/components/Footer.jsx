import React from "react";
import Logo from "../assets/icons/Logo.svg";
import Etran from "../assets/icons/Etran.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-background-3">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-[31px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between lg:h-[300px]">
          <div className="flex flex-col items-start gap-6 md:gap-[141px]">
            <div className="w-[124px]">
              <img src={Logo} alt="Brand Logo" className="w-full h-auto" />
            </div>

            <div className="w-[124px]">
              <img src={Etran} alt="Brand Name" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 md:gap-0">
            <div className="w-full md:w-[167px] flex flex-col items-start gap-3">
              <div className="wrap-break-word font-medium text-link text-text-2">
                <p>Contact</p>
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <button className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60 text-left">
                  hello@figma.com
                </button>
                <button className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60 text-left">
                  Instagram
                </button>
                <button className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60 text-left">
                  X
                </button>
                <button className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60 text-left">
                  LinkedIn
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-1">
              <div className="wrap-break-word font-medium text-link text-text-2">
                <p>Terms &amp; Conditions</p>
              </div>

              <div className="wrap-break-word font-medium text-link text-text-2">
                <p>Privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
