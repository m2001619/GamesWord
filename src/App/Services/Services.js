import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faScrewdriverWrench,
  faMapLocationDot,
  faLaptopCode,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import {faSketch} from "@fortawesome/free-brands-svg-icons";
import Title from '../Global/Title';
import React from 'react';

const Services = ({props}) => {
  const icons = [faUserShield, faScrewdriverWrench, faMapLocationDot, faLaptopCode, faSketch, faBullhorn];
  const style = {
    services: `pt-mainPadding pb-20 bg-bgColor relative`,
    servicesBefore: `services-before absolute w-full h-7 top-0`,
    container: `contaiener flex justify-center flex-wrap gap-mainGap`,
    card: `services-card w-[350px] h-52 bg-white flex flex-col relative transition-all duration-300 hover:-translate-y-3`,
    cardBefore: `absolute w-full h-[3px] -top-1 bg-mainColor scale-50 transition-all duration-300`,
    section: `flex justify-center items-center flex-col gap-5 h-[170px] w-full`,
    icon: `text-[50px] text-[#cecece]`,
    title: `text-mainAltColor text-xl font-bold`,
    footer: `w-full h-10 bg-[#edededb3] flex justify-end items-center p-4 relative`,
    footerBefore: `absolute text-3xl font-bold left-0 bg-mainColor text-white w-[30%] h-full flex items-center pl-6`,
    footerAfter: `absolute bg-[#cecece] top-0 left-20 w-12 h-full -skew-x-[30deg]`,
    a: `text-mainAltColor`
  }  
  const cards = props.cards.map((e,i) => {
    return (
        <div className={style.card} key={i}>
          <span className={style.cardBefore}></span>  
          <div className={style.section}>
            <FontAwesomeIcon className={style.icon} icon={icons[i]}/>
            <h3 className={style.title}>{e.title}</h3>
          </div>
          <div className={style.footer}>
          <span className={style.footerBefore}>{i<10 ? `0${i+1}` : `${i+1}`}</span>
          <span className={style.footerAfter}></span>
          <a className={style.a} href={e.a.link} target="_blank">{e.a.text}</a>
          </div>
        </div>
    )
  }) 
  return (
    <div className={style.services} id={props.id}>
      <span className={style.servicesBefore}></span>  
      <Title title={props.title}/>
      <div className={style.container}>{cards}</div>
    </div>
  )
}

export default Services;
