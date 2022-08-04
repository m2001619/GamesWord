import React from "react";
import Title from "../Global/Title";
const Features = ({ props }) => { 
  const style = {
    features: `features pt-mainPadding pb-20`,
    container: `container flex justify-center flex-wrap gap-mainGap`,
    card: `w-[350px] min-h-[800px] border-[1px] border-[#ddd] relative overflow-hidden`,
    cardBefore: `absolute z-10 w-0 h-0 border-y-[175px] border-x-[410px] border-[transparent_#fff_transparent_transparent] top-[28.9%] right-0 transition-all duration-300`,
    image: `relative`,
    imageBefore: `absolute w-full h-[350px]`,
    img: `w-full h-[350px]`,
    section: `w-full min-h-[450px] z-10 p-mainPadding absolute flex flex-col items-center justify-start gap-10`,
    h3: `text-4xl relative font-semibold`,
    h3Before: `absolute w-4/5 h-[10%] -bottom-1/3 left-[10%]`,
    p: `text-[#777] leading-relaxed text-center text-lg min-h-[200px]`,
    a: `text-2xl font-bold border-[3px] py-2 px-6 relative overflow-hidden rounded-md z-10`,
    aBefore : `absolute w-full h-full -left-full top-0 transition-all duration-300 -z-10`,
  };
  const cards = props.cards.map((e, i) => {
    let color;
    if(i%3===0){
        color = `#f43d34`
    }else if(i%3===1){
        color = `#009485`;
    }else {
        color = `#02a6f2`;
    }
    return (  
      <div className={style.card} key={i}>
        <span className={style.cardBefore}></span>
        <div className={style.image}>
          <span className={style.imageBefore} style={{background: color, opacity: .5}}></span>  
          <img className={style.img} src={e.img} alt="" />
        </div>
        <div className={style.section}>
          <h3 className={style.h3}><span className={style.h3Before} style={{backgroundColor: color}}></span>{e.title}</h3>
          <p className={style.p}>{e.p}</p>
          <a className={style.a} style={{color: color, borderColor: color}} href={e.a.link} target="_blank"><span className={style.aBefore} style={{backgroundColor: color}}></span>{e.a.text}</a>
        </div>
      </div>
    );
  });
  return (
    <div className={style.features} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>{cards}</div>
    </div>
  );
};

export default Features;
