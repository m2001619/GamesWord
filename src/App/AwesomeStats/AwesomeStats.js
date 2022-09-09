import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faGlobeAsia,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { classnames, opacity } from "tailwindcss-classnames";

const AwesomeStats = ({ props }) => {
  console.count("Re-render AwesomeStats");
  const icons = [faUser, faCode, faGlobeAsia, faMoneyBill];

  const cards = props.cards.map((e, i) => {
    return (
      <div
        className={classnames(
          opacity("opacity-80", "hover:opacity-100"),
          "w-56 flex flex-col items-center bg-white p-5 gap-4 relative transition-all duration-300",
          "[&:hover>.cardBefore]:h-full [&:hover>.cardAfter]:h-full"
        )}
        key={i}
      >
        <span className="cardBefore absolute bg-mainColor w-[2px] h-0 left-0 bottom-0 transition-all duration-700"></span>
        <span className="cardAfter absolute bg-mainColor w-[2px] h-0 right-0 top-0 transition-all duration-700"></span>
        <FontAwesomeIcon className="text-3xl" icon={icons[i]} />
        <span className="text-4xl font-bold">{e.number}</span>
        <p className="text-lg font-bold">{e.text}</p>
      </div>
    );
  });

  return (
    <div
      className="py-mainPadding relative bg-cover"
      style={{ backgroundImage: `url("${props.img}")` }}
      id={props.id}
    >
      <span className="absolute bg-[#ffffffe6] w-full h-full top-0 left-0"></span>
      <h2 className="my-10 mx-auto w-max font-bold text-4xl relative">
        {props.title}
      </h2>
      <div className="container relative flex flex-wrap justify-center items-center p-mainPadding gap-mainGap">
        {cards}
      </div>
    </div>
  );
};

export default React.memo(AwesomeStats);
