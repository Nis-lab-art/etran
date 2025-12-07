import React from "react";
import HeaderImage from "../assets/images/header-image.jpg";
import Logo1 from "../assets/icons/logo-1.svg";
import Logo2 from "../assets/icons/logo-2.svg";
import Logo3 from "../assets/icons/logo-3.svg";
import Logo4 from "../assets/icons/logo-4.svg";
import Logo5 from "../assets/icons/logo-5.svg";
import BarGraph from "../assets/icons/BarGraph.svg";
import Finance from "../assets/icons/Finance.svg";
import FormImage from "../assets/images/Form-image.jpg";
import CreditCard from "../assets/images/Credit-card.jpg";

const Content = () => {
  return (
    <main className="flex flex-col items-start p-0 w-full">
      <section className="h-dvh w-full bg-background-2 flex">
        <div className="w-full flex flex-col items-center justify-between px-10 py-8">
          <div className="w-full shrink-0 rounded-[20px] overflow-hidden">
            <img
              src={HeaderImage}
              alt="Header"
              className="w-full h-full object-cover rounded-[20px] shadow-lg"
            />
          </div>

          <div className="text-center">
            <h2 className="text-text-1 text-heading-3 leading-[109%] tracking-tight">
              We escalate transfer efficiency <br aria-hidden="true" />
              and productivity
            </h2>
          </div>

          <div className="w-full flex justify-center flex-wrap gap-12 pt-6">
            <img src={Logo1} alt="Logo 1" className="h-6 w-auto" />
            <img src={Logo2} alt="Logo 2" className="h-6 w-auto" />
            <img src={Logo3} alt="Logo 3" className="h-6 w-auto" />
            <img src={Logo4} alt="Logo 4" className="h-6 w-auto" />
            <img src={Logo5} alt="Logo 5" className="h-4 w-auto" />
          </div>
        </div>
      </section>

      <section className="w-full bg-background-2 flex">
        <div className="w-full flex flex-col items-center justify-between px-10 py-8">
          <div className="flex flex-col justify-center items-center gap-[30px] py-20 px-10 w-full">
            <div className="shrink-0 flex flex-col items-center gap-2.5 p-0">
              <div className="text-heading-1 text-heading text-center whitespace-nowrap wrap-break-word">
                <h1>Get More Done In A Week</h1>
              </div>

              <div className="text-link font-medium text-text-3 text-center text-text-2">
                <h2>
                  Maximize your productivity with smarter tools designed to
                  streamline <br aria-hidden="true" /> your workflow to automate
                  tasks, stay organized
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-accent-1 h-[220px] flex flex-col items-center justify-center text-center">
              <p className="text-[90px] leading-none font-normal text-heading">
                2x
              </p>
              <p className="mt-4 text-paragraph text-heading">
                Double Your Productivity
              </p>
            </div>
            <div className="rounded-3xl bg-accent-1 h-[220px] flex flex-col items-center justify-center text-center">
              <img
                src={BarGraph}
                alt="Bar Graph"
                className="h-[120px] w-[120px]"
              />
              <p className="mt-4 text-paragraph text-heading">
                Efficiency Increase Per Transfer
              </p>
            </div>
            <div className="rounded-3xl bg-accent-1 h-[220px] flex flex-col items-center justify-center text-center">
              <img
                src={Finance}
                alt="Bar Graph"
                className="h-[120px] w-[120px]"
              />
              <p className="mt-4 text-paragraph text-heading">
                Centralize Your Finances
              </p>
            </div>

            <div className="rounded-3xl bg-accent-1 h-[220px] flex flex-col items-center justify-center text-center">
              <p className="text-[90px] leading-none font-normal text-heading">
                130%
              </p>
              <p className="mt-4 text-paragraph text-heading">More Activity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-2 flex">
        <div className="w-full flex flex-col items-center justify-between px-10 py-20 gap-[30px]">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="shrink-0 flex flex-col items-center gap-2.5 p-0">
              <div className="text-heading-1 text-heading text-center whitespace-nowrap wrap-break-word">
                <h1>The Most Reliable App</h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-5">
              <div className="w-full bg-gray-200 rounded-[20px] overflow-hidden">
                <img
                  src={CreditCard}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <p className="text-link text-heading font-medium">
                  Scale Your Team, Not Your Card Expenses
                </p>
                <p className="text-caption text-text-2 font-medium">
                  Issue virtual and physical cards at no additional cost to
                  support teams of any size.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full bg-gray-200 rounded-[20px] overflow-hidden">
                <img
                  src={FormImage}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <p className="text-link text-heading font-medium">
                  Effortless Paper Tracking, Mobile Convenience
                </p>
                <p className="text-caption text-text-2 font-medium">
                  Get precise control—at scale—with the ability to lock any card
                  and restrict any type of spend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
