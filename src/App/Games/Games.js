import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Title from "../Global/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classnames } from "tailwindcss-classnames";

const Games = ({ props }) => {
  console.count("Re-render Games");
  const media = [faFacebookF, faTwitter, faInstagram, faYoutube];

  // Cards
  const cards = props.cards.map((e, i) => {
    //Media card
    const mediaCard = media.map((el, i) => {
      const color = {
        color: filterColor(el),
      };

      return (
        <a
          className="text-[#777]"
          href={e.socialMedia[i]}
          target="_blank"
          key={i}
          style={color}
        >
          <FontAwesomeIcon icon={el} />
        </a>
      );
    });

    return (
      <div
        className={classnames(
          "[&:hover>span]:w-full [&:hover>img]:grayscale-[100%]",
          "w-[300px] h-[450px] relative flex flex-col rounded-md bg-bgColor"
        )}
        key={i}
      >
        <span className="w-0 h-full absolute right-0 rounded-md bg-[#ddd] transition-all duration-300"></span>
        <div className="p-[7%]"></div>
        <img
          className="w-full h-[60%] absolute top-1/2 rounded-md translate-x-[-20%] translate-y-[-60%]"
          src={e.img}
          alt=""
        />
        <div className="h-[70%] pr-5 flex justify-end z-10">
          <div className="flex justify-center items-center flex-col gap-9 text-lg">
            {mediaCard}
          </div>
        </div>
        <div className="w-full h-[14.5%] flex flex-col justify-center pl-5 z-10">
          <h3 className="mb-3 text-mainAltColor text-2xl font-bold">
            {e.name}
          </h3>
          <p>{e.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="pt-mainPadding pb-20" id={props.id}>
      <Title title={props.title} />
      <div className="container flex justify-center flex-wrap gap-[88px] pt-mainPadding">
        {cards}
      </div>
    </div>
  );
};

// Filter Color Function
function filterColor(e) {
  if (e === faFacebookF) return `#395693`;
  else if (e === faTwitter) return `#009ded`;
  else if (e === faInstagram) return `#C13584`;
  else if (e === faYoutube) return `#f70000`;
  else return ``;
}

export default React.memo(Games);
