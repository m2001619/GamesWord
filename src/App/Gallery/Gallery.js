import React from "react";
import Title from "../Global/Title";
import { classnames, scale, rotate } from "tailwindcss-classnames";

const Gallery = ({ props }) => {
  console.count("Re-render Gallery");

  // Images Component
  const cards = props.images.map((e, i) => {
    return (
      <div className="w-[350px] h-[350px] bg-white p-4" key={i}>
        <div
          className={classnames(
            "overflow-hidden relative",
            "[&:hover>span]:animate-full"
          )}
        >
          <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-[#ededed] opacity-20"></span>
          <img
            className={classnames(
              scale("hover:scale-125"),
              rotate("hover:rotate-12"),
              "w-full relative transition-all duration-300"
            )}
            src={e}
            alt=""
          />
        </div>
      </div>
    );
  });

  return (
    <div className="relative pt-mainPadding pb-20 bg-bgColor" id={props.id}>
      <span className="gellery-before w-full h-7 absolute top-0"></span>
      <Title title={props.title} />
      <div className="flex justify-center flex-wrap gap-mainGap">{cards}</div>
    </div>
  );
};
export default React.memo(Gallery);
