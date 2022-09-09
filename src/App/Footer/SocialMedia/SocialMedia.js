import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = ({ props }) => {
  const socialMediaIcons = [faGithub, faLinkedinIn];

  const socialMedia = props.map((e, i) => {
    return (
      <a href={e.link} target="_blank" key={i}>
        <div className="w-10 h-10 flex justify-center items-center bg-[#777] text-[#b9b9b9] text-xl transition-none duration-300">
          <FontAwesomeIcon icon={socialMediaIcons[i]} />
        </div>
      </a>
    );
  });

  return <div className="flex gap-3">{socialMedia}</div>;
};

export default SocialMedia;
