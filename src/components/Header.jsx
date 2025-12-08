import React from "react";
import Union from "../assets/icons/Union.svg";
import { LargetButton, Link, SmallButton } from "./Button";
import Bolt from "../assets/icons/Bolt.svg";
import Globe from "../assets/icons/Globe.svg";
import Shield from "../assets/icons/Shield.svg";

const Header = () => {
  return (
    <header
      className="
            fixed inset-y-0 left-0
            w-[520px]
            bg-background-1  /* green column */
            z-50
            flex flex-col items-start gap-[49px]
            py-[30px] px-10
          "
    >
      <nav className="w-full flex justify-between items-start p-0">
        <div className="flex items-center gap-5">
          <img src={Union} alt="Logo" />
          <p className="font-ibm font-semibold text-paragraph text-background-2 leading-[105%] tracking-tight">
            Etran
          </p>
        </div>
        <a
          href="https://www.figma.com/sites/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2.5"
        >
          <SmallButton />
        </a>
      </nav>

      <section className="shrink-0 flex flex-col items-start gap-5 p-0">
        <div>
          <h1 className="text-heading-1 leading-[105%] tracking-tight whitespace-pre-wrap">
            <span className="text-background-2 block">Money Transfers</span>
            <span className="text-accent-1">Made Simple</span>
          </h1>
        </div>
        <div className="whitespace-nowrap wrap-break-word">
          <h1 className="text-subhead text-paragraph leading-[109%] whitespace-pre-wrap">
            No personal credit checks or founder guarantee.
          </h1>
        </div>
      </section>

      <section className="flex flex-col gap-5 p-0 w-full">
        <div>
          <h3 className="font-medium text-link text-accent-1">Our offerings</h3>
        </div>

        <div className="flex gap-2.5 items-start p-0 w-full">
          <LargetButton
            topText="Instant"
            bottomText="Productivity"
            icon={Bolt}
            targetId="productivity"
          />
          <LargetButton
            topText="Expense"
            bottomText="Management"
            icon={Globe}
            targetId="management"
          />
          <LargetButton
            topText="Advanced"
            bottomText="Technology"
            icon={Shield}
            targetId="technology"
          />
        </div>
      </section>

      <section className="flex shrink-0 items-start gap-3 w-full p-0">
        <Link text="Contact" />
        <Link text="Social" />
        <Link text="Address" />
        <Link text="Legal Terms" />
      </section>
    </header>
  );
};

export default Header;
