import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faClock,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Footer = ({ props }) => {
  const socialMediaIcons = [faGithub, faLinkedinIn];
  const contectUsIcons = [faMapMarkedAlt, faClock, faPhoneVolume];
  const style = {
    footer: `bg-[#191919]`,
    cotainer: `flex justify-center items-center flex-wrap p-mainPadding gap-mainGap`,
    whoUs: `items-center md:items-start justify-center md:justify-start flex flex-col gap-5`,
    h3: `text-white text-4xl font-bold`,
    scoialMedia: `flex gap-3`,
    a: ``,
    icon: `w-10 h-10 bg-[#777] flex justify-center items-center text-[#b9b9b9] text-xl transition-none duration-300`,
    p: `text-center md:text-start text-[#b9b9b9] leading-relaxed w-52`,
    links: `flex flex-col items-center`,
    li: `w-60 p-4 border-b-[1px] border-b-[#777] transition-all duration-300 hover:pl-6 [&:hover>a]:text-white`,
    linkA: `text-[#b9b9b9] mr-0 relative transition-all duration-300`,
    linkABefore: `font-bold mr-3 text-mainColor`,
    contectUs: `flex flex-col gap-5`,
    ContectUsDiv: `flex items-center gap-5 p-0`,
    contectUsIcon: `text-2xl text-mainAltColor`,
    contectUsP: `text-[#b9b9b9] leading-relaxed w-48`,
    images: `grid grid-cols-3 gap-3`,
    img: `w-16 border-[2px] border-white`,
    copyright: `w-full p-5 text-[#b9b9b9] border-t-[1px] border-t-[#777] flex justify-center items-center`,
    copyrightA: `text-[#b9b9b9] transition-all duration-300 hover:text-mainAltColor`,
  };
  const socialMedia = props.socialMedia.map((e, i) => {
    return (
      <a className={style.a} href={e.link} target="_blank" key={i}>
        <div className={style.icon}>
          <FontAwesomeIcon  icon={socialMediaIcons[i]} />
        </div>
      </a>
    );
  });
  const links = props.links.map((e, i) => {
    return (
      <li className={style.li} key={i}>
        <a className={style.linkA}  href={e.link}>
          <span className={style.linkABefore}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
          {e.text}
        </a>
      </li>
    );
  });
  const contectUs = props.contectUs.map((e, i) => {
    const text = e.text.map((e2, i2) => {
      return (
        <p className={style.contectUsP} key={i2}>
          {e2}
        </p>
      );
    });
    return (
      <div className={style.ContectUsDiv} key={i}>
        <FontAwesomeIcon className={style.contectUsIcon} icon={contectUsIcons[i]} />
        <div>{text}</div>
      </div>
    );
  });
  const images = props.images.map((e, i) => {
    return <img className={style.img} key={i} src={e} />;
  });
  return (
    <footer className={style.footer}>
      <div className={style.cotainer}>
        <div className={style.whoUs}>
          <h3 className={style.h3}>{props.title}</h3>
          <div className={style.scoialMedia}>{socialMedia}</div>
          <p className={style.p}>{props.text}</p>
        </div>
        <ul className={style.links}>{links}</ul>
        <div className={style.contectUs}>{contectUs}</div>
        <div className={style.images}>{images}</div>
      </div>
      <div className={style.copyright}>
          <p>
            {props.copyright.text} &copy;
            <a className={style.copyrightA} href={props.copyright.a.link}>
              {props.copyright.a.text}
            </a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
