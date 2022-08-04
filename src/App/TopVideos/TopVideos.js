import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShuffle} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useState } from "react";
import Title from "../Global/Title";
const TopVideos = ({ props }) => {
  const defaultLink = `https://www.youtube.com/embed/` + props.videos[0].a.link;
  const [source, setSource] = useState(defaultLink);
  const style = {
    topVideos: `pt-mainPadding pb-20 relative`,
    container: `container flex-col lg:flex-row flex bg-bgColor h-[900px] lg:h-[500px]`,
    videosNames: `overflow-y-scroll relative h-[430px]`,
    topVideo: `p-5 bg-[#f4f4f4] flex justify-between items-center`,
    h3: `font-bold`,
    icon: ``,
    li: `p-5 pr-10 border-[1px] border-[#efefef] bg-white cursor-pointer transition-all duration-300 hover:bg-[#fafafa]`,
    active: `bg-[#fafafa] [&:hover>.name]:bg-mainAltColor`,
    name: `name font-semibold text-black leading-relaxed transition-all duration-300`,
    time: `text-[#777] mt-3 cursor-pointer`,
    imageText: `w-full h-full p-3 flex flex-col justify-between`,
    p: `bg-white p-5 font-semibold`,
  };

  const links = props.videos.map((e, i) => {
    return (
      <Fragment key={i}>
        <li
          className={style.li}
          onClick={(e2) => {
            setSource(`https://www.youtube.com/embed/` + e.a.link);
          }}
        >
          <a className={style.name} href="#link">
            {e.a.text}
          </a>
          <p className={style.time}>{e.time}</p>
        </li>
      </Fragment>
    );
  });
  return (
    <div className={style.topVideos} id={props.id}>
      <Title title={props.title} />
      <div className={style.container} style={{ padding: "0px" }}>
        <div className={style.imageText}>
          <iframe
            width="100%"
            height="100%"
            src={source}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className={style.topVideo}>
            <h3 className={style.h3}>{props.title}</h3>
            <FontAwesomeIcon className={style.icon} icon={faShuffle} />
          </div>
          <ul className={style.videosNames}>{links}</ul>
        </div>
      </div>
    </div>
  );
};
export default TopVideos;
