import React from "react";
import Title from "../Global/Title";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { backgroundColor, classnames, textColor } from "tailwindcss-classnames";

const PricingPlans = ({ props }) => {
  console.count("Re-render PricingPlans");
  let cardStyle =
    "w-[320px] pb-4 relative z-10 shadow-[0_0px_10px_0px_#ddd] bg-white [&:hover>span]:w-full";
  let cardBeforeAfter =
    "h-1/2 w-0 absolute -z-10 bg-[#f6f6f6] transition-all duration-300";
  const style = {
    pricingPlans: ``,
    container: ``,
  };

  // Cards Component
  const cards = props.cards.map((e, i) => {
    // Filter Cards Type
    let ticket;
    if (e.type === `Advanced`) {
      cardStyle += " lg:-translate-y-5 relative";
      ticket = (
        <div className="absolute top-12 -right-10 py-3 pr-8 pl-4 bg-mainColor text-white font-bold rotate-90">
          Most Popular
          <span className="w-7 h-7 absolute -right-4 bottom-2 -z-10 bg-white rotate-45"></span>
        </div>
      );
    } else {
      cardStyle = cardStyle.split("lg:-translate-y-5 relative");
      ticket = <div></div>;
    }

    // List Component
    const list = e.inf.map((e2, i2) => {
      return (
        <li
          className="flex items-center gap-3 py-4 px-5 border-t-[1px] border-[#ccc]"
          key={i2}
        >
          <FontAwesomeIcon className="text-mainAltColor" icon={faCheck} />
          <p>{e2}</p>
        </li>
      );
    });

    // return Cards Component
    return (
      <div className={cardStyle} key={i}>
        {ticket}
        <span className={classnames(cardBeforeAfter, "top-0 left-0")}></span>
        <span
          className={classnames(cardBeforeAfter, "bottom-0 right-0")}
        ></span>
        <div className="flex flex-col items-center p-5 gap-6">
          <h3 className="text-2xl font-bold">{e.type}</h3>
          <img className="w-20" src={e.img} alt="" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-mainAltColor">
              {e.sell}
            </span>
            <p className="text-sm text-[#777]">{e.time}</p>
          </div>
        </div>
        <ul>{list}</ul>
        <div className="flex justify-center items-center p-5">
          <a
            className={classnames(
              "py-3 px-5 font-bold border-2 border-mainAltColor rounded-md transition-all duration-300",
              textColor("text-mainAltColor", "hover:text-white"),
              backgroundColor("hover:bg-mainAltColor")
            )}
            href={e.a.link}
          >
            {e.a.text}
          </a>
        </div>
      </div>
    );
  });

  // return PricingPlans Component
  return (
    <div className="relative pt-mainPadding pb-20 bg-bgColor" id={props.id}>
      <Title title={props.title} />
      <div className="container py-mainPadding px-0 flex justify-center items-center flex-wrap gap-mainGap">{cards}</div>
    </div>
  );
};

export default React.memo(PricingPlans);
