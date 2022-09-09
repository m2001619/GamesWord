import React from "react";
import { classnames, padding } from "tailwindcss-classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Links = ({ props }) => {
  const links = props.map((e, i) => {
    return (
      <li
        className={classnames(
          padding("p-4", "hover:pl-6"),
          "w-60 border-b-[1px] border-b-[#777] transition-all duration-300",
          "[&:hover>a]:text-white"
        )}
        key={i}
      >
        <a
          className="relative mr-0 text-[#b9b9b9] transition-all duration-300"
          href={e.link}
        >
          <span className="mr-3 font-bold text-mainColor">
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
          {e.text}
        </a>
      </li>
    );
  });

  return (
    <>
      <ul className="flex flex-col items-center">{links}</ul>
    </>
  );
};

export default Links;
