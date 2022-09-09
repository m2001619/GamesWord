import React from "react";
import {
  classnames,
  justifyContent,
  alignItems,
  textAlign,
  textColor,
} from "tailwindcss-classnames";
import SocialMedia from "./SocialMedia/SocialMedia";
import Links from "./Links/Links";
import ContectUs from "./ContectUs/ContectUs";

const Footer = ({ props }) => {
  console.count("Re-render Footer");

  // Images Component
  const images = props.images.map((e, i) => {
    return <img className="w-16 border-[2px] border-white" key={i} src={e} />;
  });

  return (
    <footer className="bg-[#191919]">
      <div className="flex justify-center items-center flex-wrap p-mainPadding gap-mainGap">
        <div
          className={classnames(
            alignItems("items-center", "md:items-start"),
            justifyContent("justify-center md:justify-start"),
            "flex flex-col gap-5"
          )}
        >
          <h3 className="text-white text-4xl font-bold">{props.title}</h3>
          <SocialMedia props={props.socialMedia} />
          <p
            className={classnames(
              textAlign("text-center", "md:text-start"),
              "w-52 leading-relaxed text-[#b9b9b9]"
            )}
          >
            {props.text}
          </p>
        </div>
        <Links props={props.links} />
        <ContectUs props={props.contectUs} />
        <div className="grid grid-cols-3 gap-3">{images}</div>
      </div>
      <div className="w-full flex justify-center items-center p-5 border-t-[1px] border-t-[#777] text-[#b9b9b9]">
        <p>
          {props.copyright.text} &copy;
          <a
            className={classnames(
              textColor("hover:text-mainAltColor"),
              "text-[#b9b9b9] transition-all duration-300"
            )}
            href={props.copyright.a.link}
          >
            {props.copyright.a.text}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
