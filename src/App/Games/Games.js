import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Title from "../Global/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Games = ({ props }) => {
  const style = {
    teamMember: `pt-mainPadding pb-20`,
    container: `container flex justify-center flex-wrap gap-[88px] pt-mainPadding`,
    memberCard: `member-card w-[300px] h-[450px] bg-bgColor relative flex flex-col rounded-md `,
    memberCardAfter: `w-0 h-full absolute bg-[#ddd] right-0 transition-all duration-300 rounded-md`,
    empty: `p-[7%]`,
    img: `absolute w-full h-[60%] top-1/2 rounded-md translate-x-[-20%] translate-y-[-60%]`,
    socialMedia: `h-[70%] flex justify-end pr-5 z-10`,
    div: `flex justify-center items-center flex-col gap-9 text-lg`,
    text: `z-10 w-full h-[14.5%] flex flex-col justify-center pl-5`,
    h3: `text-mainAltColor text-2xl mb-3 font-bold`,
  };
  const media = [faFacebookF, faTwitter, faInstagram, faYoutube];
  const cards = props.cards.map((e, i) => {
    return (
      <div className={style.memberCard} key={i}>
        <span className={style.memberCardAfter}></span>
        <div className={style.empty}></div>
        <img className={style.img} src={e.img} alt="" />
        <div className={style.socialMedia}>
          <div className={style.div}>
            {media.map((el, i) => {
              const color = {
                color: filterColor(el),
              }
              return (
                <a className="text-[#777]" href={e.socialMedia[i]} target="_blank" key={i}  style={color}>
                  <FontAwesomeIcon icon={el} />
                </a>
              );
            })}
          </div>
        </div>
        <div className={style.text}>
          <h3 className={style.h3}>{e.name}</h3>
          <p>{e.text}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={style.teamMember} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>{cards}</div>
    </div>
  );
};
function filterColor(e) {
  if (e === faFacebookF) return `#395693`;
  else if (e === faTwitter) return `#009ded`;
  else if (e === faInstagram) return `#C13584`;
  else if (e === faYoutube) return `#f70000`;
  else return ``;
}
export default Games;
