import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUser,
  faBuilding,
  faCheckCircle,
  faClipboard,
  faCalendarAlt,
  faPlayCircle,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import {faServer,faPercent} from "@fortawesome/free-solid-svg-icons";
const MegaMenu = ({ titles, img, sendMegaMenu }) => {
  const links1 = [];
  const links2 = [];
  const icons1 = [faComment, faUser, faBuilding, faCheckCircle, faClipboard];
  const icons2 = [faCalendarAlt, faServer, faPlayCircle, faChartBar, faPercent];
  const style = {
    megaMenu: `mega-menu mt-4 md:mt-0 py-6 px-0 md:p-6 border-b-4 border-b-mainColor absolute left-0 w-full top-[85px] bg-white opacity-0 transition duration-300`,
    container: `container flex justify-around m-auto flex-col md:flex-row`,
    image: `hidden lg:block flex max-w-full w-96`,
  };
  titles.map((e, i, arr) =>
    i < arr.length / 2 ? links1.push(e) : links2.push(e)
  );
  return (
    <div className={style.megaMenu} onLoad = {(e) => sendMegaMenu(e.target.parentNode.parentNode)}>
      <div className={style.container}>
        <img className={style.image} src={img} alt="" />
        {filter(links1, icons1)}
        {filter(links2, icons2)}
      </div>
    </div>
  );
};

function filter(titles, icons) {
  const style = {
    links: `w-full md:w-max flex flex-col justify-between`,
    a: `w-full md:w-max`,
    li: `li-class w-full md:w-64 h-14 p-3 pr-4 text-mainAltColor font-bold border-b-2 border-b-[#ddd] flex items-center gap-3 relative`,
    liBefore: `li-before w-0 h-full left-0 absolute bg-[#fafafa] opacity-0 transition-all duration-300`,
  };
  const mainLinks = titles.map((e, i) => {
    const text = e
      .split(/-/)
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    const href = `#${e}`;
    return (
      <Fragment key={i + 2}>
        <a className={style.a} href={href}>
          <li className={style.li}>
            <span className={style.liBefore}></span>
            <FontAwesomeIcon icon={icons[i]} />
            <span>{text}</span>
          </li>
        </a>
      </Fragment>
    );
  });
  return <ul className={style.links}>{mainLinks}</ul>;
}

export default MegaMenu;
