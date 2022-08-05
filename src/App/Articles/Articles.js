import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../Global/Title";
import {faRightLong} from "@fortawesome/free-solid-svg-icons";
const Articles = ({props}) => {
  const style = {
  article : `p-mainPadding`,
  container : `container flex justify-center gap-mainGap flex-wrap pt-mainPadding pb-mainPadding`,
  card : `flex flex-col w-64 shadow-[0_0px_10px_0px_#ddd] relative transition-all duration-300 hover:-translate-y-3 [&:hover>a>span]:right-1 [&:hover>a>span]:animate-next`,
  image : `rounded-[5px_5px_0px_0px] h-48`,
  cardText : `p-5 border-b-[1px] border-b-[#ddd]`,
  h3 : `font-bold`,
  text : `mt-3 text-[#777] leading-relaxed min-h-[200px]`,
  readMore : `py-4 px-5 text-mainAltColor font-bold relative rounded-[0px_0px_5px_5px] `,
  readMoreAfter : `text-lg absolute right-5 top-1/2 -translate-y-1/2`,
  };

  const cards = props.cards.map((e,i) => {
    return(
        <div className={style.card} key={i}>
            <img className={style.image} src={e.img} alt=""/>
            <div className={style.cardText}>
                <h3 className={style.h3}>{e.h3}</h3>
                <p className={style.text}>{e.p}</p>
            </div>
            <a className={style.readMore} href={e.a} target="_blank"><span className={style.readMoreAfter}><FontAwesomeIcon icon={faRightLong}/></span>Gp To Main Page</a>
        </div>
    )
  })
  return <div className={style.article} id="articles">
    <Title title={props.title}/>
    <div className={style.container}>{cards}</div>
  </div>;
};
export default Articles;
