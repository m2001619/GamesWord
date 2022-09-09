import React from "react";
import Title from "../Global/Title";
const Features = ({ props }) => {
  console.count("Re-render Features");

  // Cards
  const cards = props.cards.map((e, i) => {
    let color;
    if (i % 3 === 0) {
      color = `#f43d34`;
    } else if (i % 3 === 1) {
      color = `#009485`;
    } else {
      color = `#02a6f2`;
    }

    return (
      <div
        className="w-[350px] min-h-[800px] relative overflow-hidden border-[1px] border-[#ddd] [&:hover>div>a>span]:left-0 [&:hover>div>a]:text-white [&:hover>span]:rotate-[270=deg]"
        key={i}
      >
        <span className="w-0 h-0 absolute right-0 z-10 border-y-[175px] border-x-[410px] border-[transparent_#fff_transparent_transparent] top-[28.9%] transition-all duration-300"></span>
        <div className="relative">
          <span
            className="absolute w-full h-[350px] opacity-50"
            style={{ backgroundColor: color }}
          ></span>
          <img className="w-full h-[350px]" src={e.img} alt="" />
        </div>
        <div className="w-full min-h-[450px] absolute z-10 flex flex-col items-center justify-start gap-10 p-mainPadding">
          <h3 className="text-4xl relative font-semibold">
            <span
              className="w-4/5 h-[10%] absolute -bottom-1/3 left-[10%]"
              style={{ backgroundColor: color }}
            ></span>
            {e.title}
          </h3>
          <p className="leading-relaxed min-h-[200px] text-[#777] text-center text-lg">
            {e.p}
          </p>
          <a
            className="link relative z-10 overflow-hidden py-2 px-6 border-[3px] rounded-md text-2xl font-bold"
            style={{ color: color, borderColor: color }}
            href={e.a.link}
            target="_blank"
          >
            <span
              className="absolute w-full h-full -left-full top-0 transition-all duration-300 -z-10"
              style={{ backgroundColor: color }}
            ></span>
            {e.a.text}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="features pt-mainPadding pb-20" id={props.id}>
      <Title title={props.title} />
      <div className="container flex justify-center flex-wrap gap-mainGap">
        {cards}
      </div>
    </div>
  );
};

export default React.memo(Features);
