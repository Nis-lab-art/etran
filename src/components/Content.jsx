import React from "react";
import HeaderImage from "../assets/images/header-image.jpg";
import Logo1 from "../assets/icons/logo-1.svg";
import Logo2 from "../assets/icons/logo-2.svg";
import Logo3 from "../assets/icons/logo-3.svg";
import Logo4 from "../assets/icons/logo-4.svg";
import Logo5 from "../assets/icons/logo-5.svg";

const Content = () => {
  return (
    <main className="h-dvh ml-[570px] overflow-y-auto">
      <section className="min-h-dvh px-16 py-12">
        <div className="flex flex-col justify-center items-center gap-[50px]">
          <div className="w-full h-[480px]">
            <img
              src={HeaderImage}
              alt="Header"
              className="
              w-full h-full
              rounded-[20px]
              shadow-lg
              object-cover object-center
              pointer-events-none select-none
            "
            />
          </div>
          <div className="text-center">
            <h2 className="text-text-1 text-heading-3 leading-[109%] tracking-tight">
              We escalate transfer efficiency <br aria-hidden="true" />
              and productivity
            </h2>
          </div>

          <div className="flex items-start flex-wrap py-[34px]">
            <div className="flex content-center justify-center items-center gap-12">
              <img src={Logo1} alt="Logo 1" className="h-6 w-auto" />
              <img src={Logo2} alt="Logo 2" className="h-6 w-auto" />
              <img src={Logo3} alt="Logo 3" className="h-6 w-auto" />
              <img src={Logo4} alt="Logo 4" className="h-6 w-auto" />
              <img src={Logo5} alt="Logo 5" className="h-4 w-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
