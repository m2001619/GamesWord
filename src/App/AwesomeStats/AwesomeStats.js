import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faGlobeAsia,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
const AwesomeStats = ({ props }) => {
  const icons = [faUser, faCode, faGlobeAsia, faMoneyBill];
  const bg = {
    backgroundImage: `url("${props.img}")`,
    backgroundSize: `cover`,
  };
  const style = {
    awesomeStats: `py-mainPadding relative`,
    awesomeStatsBefore: `absolute bg-[#ffffffe6] w-full h-full top-0 left-0`,
    h2: `my-10 mx-auto w-max font-bold text-4xl relative`,
    container: `container relative flex flex-wrap justify-center items-center p-mainPadding gap-mainGap`,
    card: `w-56 flex flex-col items-center bg-white p-5 gap-4 relative opacity-80 transition-all duration-300 hover:opacity-100 [&:hover>.cardBefore]:h-full [&:hover>.cardAfter]:h-full`,
    cardBefore: `cardBefore absolute bg-mainColor w-[2px] h-0 left-0 bottom-0 transition-all duration-700`,
    cardAfter: `cardAfter absolute bg-mainColor w-[2px] h-0 right-0 top-0 transition-all duration-700`,
    icon: `text-3xl`,
    span: `text-4xl font-bold`,
    p: `text-lg font-bold`,
  };
  const cards = props.cards.map((e, i) => {
    return (
      <div className={style.card} key={i}>
        <span className={style.cardBefore}></span>
        <span className={style.cardAfter}></span>
        <FontAwesomeIcon className={style.icon} icon={icons[i]} />
        <span className={style.span}>{e.number}</span>
        <p className={style.p}>{e.text}</p>
      </div>
    );
  });
  return (
    <div className={style.awesomeStats} id={props.id} style={bg}>
      <span className={style.awesomeStatsBefore}></span>
      <h2 className={style.h2}>{props.title}</h2>
      <div className={style.container}>{cards}</div>
    </div>
  );
};
export default AwesomeStats;
