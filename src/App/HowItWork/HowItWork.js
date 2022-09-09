import React from "react";
import Title from "../Global/Title";
import { classnames, width, display } from "tailwindcss-classnames";

const HowItWork = ({ props }) => {
  console.count("Re-render HowItWork");

  // Cards Component
  const cards = props.cards.map((e, i) => {
    return (
      <div
        className={classnames(
          "relative flex items-center gap-8 p-5 border-2 border-white rounded-md bg-[#f6f5f5]",
          "[&:hover>span]:w-full [&:hover>span]:h-full"
        )}
        key={i}
      >
        <span className="w-0 h-0 absolute left-1/2 top-1/2 opacity-10 bg-[#777] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"></span>
        <img className="w-16 h-16" src={e.img} alt="" />
        <div>
          <h3 className="mb-6 text-2xl font-bold">{e.title}</h3>
          <p className="w-4/5 text-lg color-[#777]">{e.p}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative pt-mainPadding pb-20 bg-bgColor" id={props.id}>
      <Title title={props.title} />
      <div className="container flex justify-between items-center gap-mainGap">
        <div
          className={classnames(
            display("hidden", "lg:block"),
            width("w-full", "lg:w-1/3")
          )}
        >
          <img className="w-full" src={props.img} alt="" />
        </div>
        <div
          className={classnames(
            width("w-full", "lg:w-1/2"),
            "flex flex-col gap-5"
          )}
        >
          {cards}
        </div>
      </div>
    </div>
  );
};
export default React.memo(HowItWork);
