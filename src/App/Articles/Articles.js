import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../Global/Title";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Articles = ({ props }) => {
  console.count("Re-render Article");
  /* Creating Cards */
  const cards = props.cards.map((e, i) => {
    return (
      <div
        className="flex flex-col w-64 shadow-[0_0px_10px_0px_#ddd] relative transition-all duration-300 hover:-translate-y-3 [&:hover>a>span]:right-1 [&:hover>a>span]:animate-next"
        key={i}
      >
        <img className="rounded-[5px_5px_0px_0px] h-48" src={e.img} alt="" />
        <div className="p-5 border-b-[1px] border-b-[#ddd]">
          <h3 className="font-bold">{e.h3}</h3>
          <p className="mt-3 text-[#777] leading-relaxed min-h-[200px]">
            {e.p}
          </p>
        </div>
        <a
          className="py-4 px-5 text-mainAltColor font-bold relative rounded-[0px_0px_5px_5px]"
          href={e.a}
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-lg absolute right-5 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faRightLong} />
          </span>
          Gp To Main Page
        </a>
      </div>
    );
  });

  // return Article function
  return (
    <div className="p-mainPadding" id="articles">
      <Title title={props.title} />
      <div className="container flex justify-center gap-mainGap flex-wrap pt-mainPadding pb-mainPadding">
        {cards}
      </div>
    </div>
  );
};

export default React.memo(Articles);
