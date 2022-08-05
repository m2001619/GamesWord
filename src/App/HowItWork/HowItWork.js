import React from "react";
import Title from "../Global/Title";
const HowItWork = ({ props }) => {
  const style = {
    howItWork: `pt-mainPadding pb-20 bg-bgColor relative`,
    container: `container flex justify-between items-center gap-mainGap`,
    image: `hidden lg:block w-full lg:w-1/3`,
    img: `w-full`,
    cards: `w-full lg:w-1/2 flex flex-col gap-5`,
    card: `flex gap-8 p-5 items-center bg-[#f6f5f5] border-2 border-white relative rounded-md [&:hover>span]:w-full [&:hover>span]:h-full`,
    cardBefore: `absolute bg-[#777] w-0 h-0 left-1/2 top-1/2 opacity-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300`,
    cardImg: `w-16 h-16`,
    div: ``,
    h3: `mb-6 text-2xl font-bold`,
    p: `text-lg color-[#777] w-4/5`,
  };
  const cards = props.cards.map((e, i) => {
    return (
      <div className={style.card} key={i}>
        <span className={style.cardBefore}></span>
        <img className={style.cardImg} src={e.img} alt="" />
        <div className={style.div}>
          <h3 className={style.h3}>{e.title}</h3>
          <p className={style.p}>{e.p}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={style.howItWork} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>
        <div className={style.image}>
          <img className={style.img} src={props.img} alt="" />
        </div>
        <div className={style.cards}>{cards}</div>
      </div>
    </div>
  );
};
export default HowItWork;
