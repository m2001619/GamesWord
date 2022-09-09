import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const ContectUs = ({ props }) => {
  const contectUsIcons = [faMapMarkedAlt, faClock, faPhoneVolume];

  const contectUs = props.map((e, i) => {
    const text = e.text.map((e2, i2) => {
      return (
        <p className="w-48 text-[#b9b9b9] leading-relaxed" key={i2}>
          {e2}
        </p>
      );
    });
    return (
      <div className="flex items-center p-0 gap-5" key={i}>
        <FontAwesomeIcon
          className="text-2xl text-mainAltColor"
          icon={contectUsIcons[i]}
        />
        <div>{text}</div>
      </div>
    );
  });

  return <div className="flex flex-col gap-5">{contectUs}</div>;
};

export default ContectUs;
