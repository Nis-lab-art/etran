import React from "react";
import HeaderImage from "../assets/images/Header-image.jpg";
import Logo1 from "../assets/icons/logo-1.svg";
import Logo2 from "../assets/icons/logo-2.svg";
import Logo3 from "../assets/icons/logo-3.svg";
import Logo4 from "../assets/icons/logo-4.svg";
import Logo5 from "../assets/icons/logo-5.svg";
import BarGraph from "../assets/icons/BarGraph.svg";
import Finance from "../assets/icons/Finance.svg";
import FormImage from "../assets/images/Form-image.jpg";
import CreditCard from "../assets/images/Credit-card.jpg";
import Person from "../assets/images/Person.jpg";
import Wallet from "../assets/images/Wallet.png";
import MoneyGraph from "../assets/images/MoneyGraph.png";
import FingerPrint from "../assets/images/FingerPrint.png";
import People from "../assets/images/People.png";
import WomenHoldingPhone from "../assets/images/WomenHoldingPhone.png";
import { SmallButton } from "./Button";

const Content = () => {
  return (
    <main className="flex flex-col w-full">
      <section className="min-h-dvh w-full bg-background-2 flex">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 gap-8">
          <div className="w-full shrink-0 rounded-[20px] overflow-hidden max-h-[45vh] md:max-h-[55vh]">
            <img
              src={HeaderImage}
              alt="Header"
              className="w-full h-full object-cover rounded-[20px] shadow-lg"
            />
          </div>

          <div className="text-center px-2">
            <h2 className="text-text-1 text-2xl sm:text-3xl lg:text-heading-3 leading-[109%] tracking-tight">
              We escalate transfer efficiency <br aria-hidden="true" />
              and productivity
            </h2>
          </div>

          <div className="w-full flex justify-center flex-wrap gap-6 sm:gap-10 pt-4 sm:pt-6">
            <img src={Logo1} alt="Logo 1" className="h-5 sm:h-6 w-auto" />
            <img src={Logo2} alt="Logo 2" className="h-5 sm:h-6 w-auto" />
            <img src={Logo3} alt="Logo 3" className="h-5 sm:h-6 w-auto" />
            <img src={Logo4} alt="Logo 4" className="h-5 sm:h-6 w-auto" />
            <img src={Logo5} alt="Logo 5" className="h-4 w-auto" />
          </div>
        </div>
      </section>

      <section id="productivity" className="w-full bg-background-2">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-10 py-12 lg:py-20 gap-8">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="shrink-0 flex flex-col items-center gap-2.5">
              <div className="text-heading-1 text-heading text-center whitespace-normal lg:whitespace-nowrap">
                <h1>Get More Done In A Week</h1>
              </div>

              <div className="text-link font-medium text-text-3 text-center text-text-2 max-w-2xl">
                <h2>
                  Maximize your productivity with smarter tools designed to
                  streamline your workflow to automate tasks, stay organized
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-accent-1 min-h-[200px] md:h-[220px] flex flex-col items-center justify-center text-center px-4">
              <p className="text-[64px] sm:text-[80px] lg:text-[90px] leading-none font-normal text-heading">
                2x
              </p>
              <p className="mt-4 text-paragraph text-heading">
                Double Your Productivity
              </p>
            </div>
            <div className="rounded-3xl bg-accent-1 min-h-[200px] md:h-[220px] flex flex-col items-center justify-center text-center px-4">
              <img
                src={BarGraph}
                alt="Bar Graph"
                className="h-[90px] sm:h-[110px] w-auto"
              />
              <p className="mt-4 text-paragraph text-heading">
                Efficiency Increase Per Transfer
              </p>
            </div>
            <div className="rounded-3xl bg-accent-1 min-h-[200px] md:h-[220px] flex flex-col items-center justify-center text-center px-4">
              <img
                src={Finance}
                alt="Finance"
                className="h-[90px] sm:h-[110px] w-auto"
              />
              <p className="mt-4 text-paragraph text-heading">
                Centralize Your Finances
              </p>
            </div>

            <div className="rounded-3xl bg-accent-1 min-h-[200px] md:h-[220px] flex flex-col items-center justify-center text-center px-4">
              <p className="text-[64px] sm:text-[80px] lg:text-[90px] leading-none font-normal text-heading">
                130%
              </p>
              <p className="mt-4 text-paragraph text-heading">More Activity</p>
            </div>
          </div>
        </div>
      </section>

      <section id="management" className="w-full bg-background-2">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-10 py-12 lg:py-20 gap-8">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="shrink-0 flex flex-col items-center gap-2.5">
              <div className="text-heading-1 text-heading text-center whitespace-normal lg:whitespace-nowrap">
                <h1>The Most Reliable App</h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-4">
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

            <div className="flex flex-col gap-4">
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

      <section className="w-full bg-background-2">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:px-10 py-12 lg:py-[100px]">
          <div className="w-full h-60 sm:h-[280px] md:h-80 lg:h-[350px] shrink-0 rounded-[10px] overflow-hidden">
            <img
              src={Person}
              alt="Person interacting with phone"
              className="w-full h-full object-cover object-center rounded-[10px] shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="technology" className="w-full bg-background-2">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-10 py-12 lg:py-20 gap-10">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="shrink-0 flex flex-col items-center gap-2.5">
              <div className="text-heading-1 text-heading text-center whitespace-normal lg:whitespace-nowrap">
                <h2>First Class Software</h2>
              </div>

              <div className="text-link font-medium text-text-3 text-center text-text-2 max-w-2xl">
                <h2>
                  Get real-time insights, seamless transactions, and advanced
                  tools to manage your wealth effortlessly.
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-full rounded-[10px] overflow-hidden">
                <img
                  src={Wallet}
                  className="w-full h-full rounded-[10px] object-cover object-center"
                />
              </div>
              <div className="text-center text-link text-text-1 font-medium">
                <p>Safe Storage</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="w-full rounded-[10px] overflow-hidden">
                <img
                  src={FingerPrint}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center text-link text-text-1 font-medium">
                <p>Secure</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="w-full rounded-[10px] overflow-hidden">
                <img
                  src={MoneyGraph}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center text-link text-text-1 font-medium">
                <p>Earn Interest</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="w-full rounded-[10px] overflow-hidden">
                <img
                  src={People}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center text-link text-text-1 font-medium">
                <p>Family Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-background-2 flex justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col px-4 sm:px-6 lg:px-10 pt-10 lg:pt-[50px] pb-16 lg:pb-[100px] gap-4">
          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[350px] rounded-[10px] shrink-0">
            <div className="absolute inset-0 rounded-[10px] overflow-hidden">
              <img
                src={WomenHoldingPhone}
                alt="Person using phone"
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative inset-0 flex flex-col justify-end items-start gap-3 pt-10 sm:pt-[50px] px-6 sm:px-8 lg:px-10 pb-7 sm:pb-[34px]">
              <div className="relative shrink-0 flex flex-col items-start gap-3 w-full sm:w-[310px]">
                <h2 className="text-2xl sm:text-3xl lg:text-heading-2 text-background-2 leading-tight">
                  Download Etran and
                  <br /> manage everything
                  <br /> from your phone.
                </h2>

                <a
                  href="https://www.figma.com/sites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2.5 mt-2"
                >
                  <SmallButton />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
