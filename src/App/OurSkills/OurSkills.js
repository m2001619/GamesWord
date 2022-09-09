import React, { useEffect, useRef } from "react";
import Title from "../Global/Title";
import { classnames, display, width } from "tailwindcss-classnames";

const OurSkills = ({ props }) => {
  console.count("Re-render OurSkills");

  // Skills Component
  const skills = props.skills.map((e, i) => {
    const width = { width: `${e.range}%` };
    return (
      <div className="w-full flex flex-col gap-4" key={i}>
        <h3 className="font-bold">{e.title}</h3>
        <div className="w-full h-8 relative bg-[#ececec]">
          <span className="absolute right-0 -top-9 p-1 border-[1px] border-[#777] rounded-md text-sm text-mainAltColor font-bold">
            {e.range}%
          </span>
          <span
            className="h-full w-0 absolute left-0 bg-mainColor transition-all duration-300"
            style={width}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <div className="relative pt-mainPadding pb-20" id={props.id} >
      <Title title={props.title} />
      <div className="container flex items-center flex-wrap gap-mainGap">
        <div className={classnames("w-2/5", display("hidden", "lg:block"))}>
          <img className="w-full" src={props.img} alt="" />
        </div>
        <div
          className={classnames(
            "flex flex-col gap-5",
            width("w-full", "lg:w-1/2")
          )}
        >
          {skills}
        </div>
      </div>
    </div>
  );
};
export default React.memo(OurSkills);
