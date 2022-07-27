import React from "react";
import Title from "../Global/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Testimonials = ({ props }) => {
  const style = {
    testimonials: `pt-mainPadding pb-20 bg-bgColor relative`,
    container: `container flex justify-center flex-wrap gap-mainGap pt-mainPadding`,
    infCard: `w-[350px] bg-white p-10 shadow-[0_0px_10px_0px_#ddd] flex flex-col gap-3 relative rounded-md`,
    name: `font-bold`,
    image: `w-[95px] h-[95px] border-mainbgColor border-[10px] absolute -right-1 top-0 rounded-[50%] -translate-y-1/2`,
    img: `w-full h-full rounded-full`,
    job: `text-[#777] text-lg font-semibold`,
    text: `text-[#777] leading-relaxed text-lg font-semibold`,
  };
  const cards = props.cards.map((e, i) => {
    let img =
      e.gender === `male`
        ? `https://avatars.githubusercontent.com/u/10234267?v=4`
        : `https://cdn.myportfolio.com/a95391ef-a7ce-4970-b6f8-fb70896b7500/e1e241b2-f661-4224-8ea5-77986460a929_rw_1920.png?h=5b0372d8aaf62952b892f41e6d65ae72`;
    const starsArr = [];
    for (let j = 0; j < e.stars; j++) {
      starsArr.push(faStar);
    }
    return (
      <div className={style.infCard} key={i}>
        <h3 className={style.name}>{e.name}</h3>
        <div className={style.image}>
          <img className={style.img} src={img} alt="" />
        </div>
        <p className={style.job}>{e.job}</p>
        <div>
          {starsArr.map((e, i) => {
            return (
              <FontAwesomeIcon style={{ color: "#ffc107" }} icon={e} key={i} />
            );
          })}
        </div>
        <p className={style.text}>{e.text}</p>
      </div>
    );
  });
  return (
    <div className={style.testimonials} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>{cards}</div>
    </div>
  );
};
export default Testimonials;
