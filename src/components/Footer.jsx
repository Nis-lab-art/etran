import React from "react";
import Logo from "../assets/icons/Logo.svg";
import Etran from "../assets/icons/Etran.svg";

const Footer = () => {
  return (
    <footer className="w-full h-[300px] relative shrink-0 bg-background-3">
      <div className="overflow-clip relative size-full">
        <div className="w-fill h-[300px] flex justify-between items-start relative py-[31px] px-10 box-border">
          <div className="relative shrink-0 w-[124px] h-full flex flex-col items-start gap-[141px]">
            <div className="relative block shrink-0">
              <img src={Logo} alt="Brand Logo" className="w-full h-full" />
            </div>

            <div className="relative block shrink-0">
              <img src={Etran} alt="Brand Name" className="w-fll h-full" />
            </div>
          </div>

          <div className="h-full flex flex-col items-start justify-between p-0">
            <div className="w-[167px] flex flex-col items-start gap-3 p-0">
              <div className="wrap-break-word font-medium text-link w-full text-text-2">
                <p>Contact</p>
              </div>

              <div className="flex flex-col items-start gap-0.5 p-0 w-full">
                <div className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60">
                  <p>hello@figma.com</p>
                </div>
                <div className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60">
                  <p>Instagram</p>
                </div>
                <div className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60">
                  <p>X</p>
                </div>
                <div className="font-medium text-link text-text-1 wrap-break-word w-full transition-opacity duration-200 hover:opacity-60">
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-0.5 p-0 w-full">
              <div className="wrap-break-word font-medium text-link w-full text-text-2">
                <p>Terms & Conditions</p>
              </div>

              <div className="wrap-break-word font-medium text-link w-full text-text-2">
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
