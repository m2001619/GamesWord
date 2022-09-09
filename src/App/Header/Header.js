import React, { Fragment, useState } from "react";
import MegaMenu from "./Mega Menu/MegaMenu";

const Header = ({ props }) => {
  console.count("Re-render Header");
  const [megaMenu, setMegaMenu] = useState("");
  const getMegaMenu = (e) => {
    setMegaMenu(e);
  };
  const handleMegaMenu = () => {
    megaMenu.style.cssText = `opacity: 1;z-index: 1;`;
    setTimeout(() => {
      megaMenu.style.cssText = `opacity: 0;z-index: 0;`;
    }, 5000);
  };
  const otherLinks = [];
  const style = {
    logo: `text-2xl font-bold h-12 md:h-20 flex justify-center items-center w-full md:w-max text-mainColor`,
    link: `other-links flex justify-center items-center h-10 md:h-20 relative text-black p-2 md:px-8 md:py-0 text-sm md:text-lg overflow-hidden transition duration-300 hover:text-mainAltColor hover:after:left-0`,
    span: `absolute bg-[#fafafa] border-t-mainColor border-t-4 h-full top-0 -left-full transition duration-300 ease-in-out `,
  };
  const otherLinksStyle = ``;
  const mainLinks = props.titles.map((e, i) => {
    const text = e
      .split(/-/)
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    const href = `#${e}`;
    if (i < 3) {
      return (
        <Fragment key={i}>
          <li>
            <a className={style.link} href={href}>
              <span className={style.span}></span>
              {text}
            </a>
          </li>
        </Fragment>
      );
    } else {
      otherLinks.push(e);
    }
  });
  return (
    <header className="bg-white shadow-[0_0px_10px_0px_#ddd] relative">
      <div className="container flex justify-between items-center flex-wrap relative">
        <a className={style.logo} href="#d1">
          {props.title}
        </a>
        <ul className="main-nav flex m-auto md:m-0">
          {mainLinks}
          <li className={otherLinksStyle} onClick={() => handleMegaMenu()}>
            <a className={style.link} href="#other-links">
              Other Links
            </a>
            <MegaMenu
              titles={otherLinks}
              icons={props.icons}
              img={props.img}
              sendMegaMenu={getMegaMenu}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default React.memo(Header);
