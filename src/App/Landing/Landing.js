import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Landing = ({props}) => {
  const landingBefore = `absolute top-0 left-0 h-full w-full bg-[#ececec] -z-10 -skew-y-6 origin-top-left`;
  const container = `container min-h-screen flex items-center pb-28`;  
  const text = `flex-1 text-center lg:text-left`;
  const h2 = `font-bold text-3xl md:text-4xl tracking-tighter mb-2`;
  const p = `my-3 sm:my-0 mx-auto lg:mx-0 text-lg md:text-2xl text-[#777] leading-relaxed max-w-lg `;
  const img = `img hidden lg:block relative w-[600px] animate-upAndDown`;
  return (
    <div className='landing relative'>
      <span className={landingBefore}></span>  
      <div className={container}>
        <div className={text}>
            <h2 className={h2}>{props.h2}</h2>
            <p className={p}>{props.p}</p>
        </div>
        <div>
            <img className={img} src={props.img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Landing;
