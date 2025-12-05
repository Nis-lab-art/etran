import React from "react";
import Union from "../assets/icons/Union.svg";
import { LargetButton, Link, SmallButton } from "./Button";
import Bolt from "../assets/icons/Bolt.svg";
import Globe from "../assets/icons/Globe.svg";
import Shield from "../assets/icons/Shield.svg";

const SideBar = () => {
  return (
    <aside
      className="
        fixed inset-y-0 left-0
        w-[520px]
        bg-background-1
        flex
        px-[30px]
      "
    >
      <div className="flex flex-col py-8 w-full">
        <div className="w-full max-w-[354px] space-y-12">
          <nav className="w-full flex justify-between items-start mb-12">
            <div className="flex items-center gap-5">
              <img src={Union} alt="Logo" />
              <p className="font-ibm font-semibold text-paragraph text-background-2 leading-[105%] tracking-tight">
                Etran
              </p>
            </div>
            <div>
              <SmallButton />
            </div>
          </nav>

          <section>
            <div className="flex flex-col gap-5 w-full">
              <div>
                <h1 className="text-heading-1 leading-[105%] tracking-tight">
                  <span className="text-background-2">
                    Money Transfers Made
                  </span>
                  <span className="text-accent-1"> Simple</span>
                </h1>
              </div>
              <div>
                <h1 className="text-subhead text-paragraph leading-[109%]">
                  No personal credit checks or founder guarantee.
                </h1>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5">
            <div>
              <h3 className="font-medium text-link text-accent-1">
                Our offerings
              </h3>
            </div>

            <div className="flex gap-2.5 items-start w-full">
              <div>
                <LargetButton
                  topText="Instant"
                  bottomText="Productivity"
                  icon={Bolt}
                />
              </div>
              <div>
                <LargetButton
                  topText="Expense"
                  bottomText="Management"
                  icon={Globe}
                />
              </div>
              <div>
                <LargetButton
                  topText="Advanced"
                  bottomText="Technology"
                  icon={Shield}
                />
              </div>
            </div>
          </section>

          <section className="flex gap-3">
            <div className="">
              <Link text="Contact" />
            </div>
            <div className="">
              <Link text="Social" />
            </div>
            <div className="">
              <Link text="Address" />
            </div>
            <div className="">
              <Link text="Legal Terms" />
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
