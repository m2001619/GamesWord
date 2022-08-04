import React from "react";
import Title from "../Global/Title";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PricingPlans = ({ props }) => {
  const style = {
    pricingPlans: `pt-mainPadding pb-20 bg-bgColor relative`,
    container: `container py-mainPadding px-0 flex justify-center items-center flex-wrap gap-mainGap`,
    card: `w-[320px] pb-4 shadow-[0_0px_10px_0px_#ddd] bg-white relative z-10 [&:hover>.cardBefore]:w-full [&:hover>.cardAfter]:w-full`,
    cardBefore: `cardBefore absolute bg-[#f6f6f6] h-1/2 w-0 top-0 left-0 -z-10 transition-all duration-300`,
    cardAfter: `cardAfter absolute bg-[#f6f6f6] h-1/2 w-0 bottom-0 right-0 -z-10 transition-all duration-300`,
    cardHeader: `flex flex-col items-center p-5 gap-6`,
    h3: `text-2xl font-bold`,
    img: `w-20`,
    selltime: `flex flex-col items-center gap-2`,
    sell: `text-5xl font-bold text-mainAltColor`,
    time: `text-sm text-[#777]`,
    ul: ``,
    li: `flex gap-3 items-center border-t-[1px] border-[#ccc] py-4 px-5`,
    icon: `text-mainAltColor`,
    choosePlan: `flex justify-center items-center p-5`,
    a: `py-3 px-5 font-bold text-mainAltColor border-2 border-mainAltColor rounded-md transition-all duration-300 hover:bg-mainAltColor hover:text-white`,
    advance: ` lg:-translate-y-5 relative`,
    ticket: `absolute bg-mainColor text-white py-3 pr-8 pl-4 font-bold top-12 -right-10 rotate-90`,
    ticketBefore: `absolute w-7 h-7 bg-white -right-4 bottom-2 rotate-45 -z-10`,
  };
  const cards = props.cards.map((e, i) => {
    let ticket;
    if (e.type === `Advanced`) {
      style.card += style.advance;
      ticket = (
        <div className={style.ticket}>
          Most Popular
          <span className={style.ticketBefore}></span>
        </div>
      );
    } else {
      style.card = style.card.split(style.advance);
      ticket = <div></div>;
    }
    const list = e.inf.map((e2, i2) => {
      return (
        <li className={style.li} key={i2}>
          <FontAwesomeIcon className={style.icon} icon={faCheck} />
          <p>{e2}</p>
        </li>
      );
    });

    return (
      <div className={style.card} key={i}>
        {ticket}
        <span className={style.cardBefore}></span>
        <span className={style.cardAfter}></span>
        <div className={style.cardHeader}>
          <h3 className={style.h3}>{e.type}</h3>
          <img className={style.img} src={e.img} alt="" />
          <div className={style.selltime}>
            <span className={style.sell}>{e.sell}</span>
            <p className={style.time}>{e.time}</p>
          </div>
        </div>
        <ul className={style.ul}>{list}</ul>
        <div className={style.choosePlan}>
          <a className={style.a} href={e.a.link}>{e.a.text}</a>
        </div>
      </div>
    );
  });

  return (
    <div className= {style.pricingPlans} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>{cards}</div>
    </div>
  );
};

export default PricingPlans;
