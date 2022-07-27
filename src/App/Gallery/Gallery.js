import React from "react";
import Title from "../Global/Title";
const Gallery = ({ props }) => {
  const style = {
    gellery : `pt-mainPadding pb-20 bg-bgColor relative`,
    gelleryBefore : `gellery-before absolute w-full h-7 top-0`,
    container : `flex justify-center flex-wrap gap-mainGap`,
    galleryImage : `w-[350px] h-[350px] bg-white p-4`,
    div : `overflow-hidden relative [&:hover>span]:animate-full`,
    divBefore : `absolute bg-[#ededed] opacity-20 left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2`,
    img : `w-full relative transition-all duration-300 hover:scale-125 hover:rotate-12`,

  }  
  const cards = props.images.map((e, i) => {
    return (
      <div className={style.galleryImage} key={i}>
        <div className={style.div}>
          <span className={style.divBefore}></span>  
          <img className={style.img} src={e} alt=""/>
        </div>
      </div>
    );
  });
  return (
    <div className={style.gellery} id={props.id}>
      <span className={style.gelleryBefore}></span>  
      <Title title={props.title} />
      <div className={style.container}>{cards}</div>
    </div>
  );
};
export default Gallery;
