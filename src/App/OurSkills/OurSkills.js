import React from "react";
import Title from "../Global/Title";
const OurSkills = ({ props }) => {
  const style = {
    ourSkills: `pt-mainPadding pb-20 relative`,
    container: `container flex items-center flex-wrap gap-mainGap`,
    image: `hidden lg:block w-2/5`,
    img: `w-full`,
    range: `w-full lg:w-1/2 flex flex-col gap-5`,
    div: `w-full flex flex-col gap-4`,
    h3: `font-bold`,
    num: `w-full h-8 bg-[#ececec] relative`,
    numBefore: `absolute right-0 -top-9 text-sm p-1 border-[1px] border-[#777] text-mainAltColor font-bold rounded-md`,
    numAfter: `absolute left-0 h-full bg-mainColor transition-all duration-300 w-0`,
  }  
  const skills = props.skills.map((e, i) => {
    const width = {width: `${e.range}%`,}
    return (
      <div className={style.div} key={i}>
        <h3 className={style.h3}>{e.title}</h3>
        <div className={style.num}>
          <span className={style.numBefore}>{e.range}%</span>  
          <span className={style.numAfter} style={width}></span>
        </div>
      </div>
    );
  });
  return (
    <div className={style.ourSkills} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>
        <div className={style.image}>
          <img className={style.img} src={props.img} alt="" />
        </div>
        <div className={style.range}>{skills}</div>
      </div>
    </div>
  );
};
export default OurSkills;
