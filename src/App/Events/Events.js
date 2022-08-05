import React, { useEffect, useState } from "react";
import Title from "../Global/Title";

const Events = ({ props, sendTime }) => {
  /*  */
  /* let [time, setTime] = useState([
    {
      number: props.event.date[0].number,
      text: `Days`,
    },
    {
      number: props.event.date[1].number,
      text: `Hours`,
    },
    {
      number: props.event.date[2].number,
      text: `Minutes`,
    },
    {
      number: props.event.date[3].number,
      text: `Seconds`,
    }
  ]);
  let counter = setInterval(() => {
    setTime((e) => {
      e[3].number--;
      return e;
    })
    if(time[3].number<0){
      setTime((e) => {
        e[2].number--;
        return e;
      })  
        if(time[2].number<0){
          setTime((e) => {
            e[1].number--;
            return e;
          })
            if(time[1].number<0){
              setTime((e) => {
                e[0].number--;
                return e;
              })
                if(time[0].number<0){
                    clearInterval(counter);
                }
                setTime((e) => {
                  e[1] = 23;
                  return e;
                })
            }
            setTime((e) => {
              e[2] = 59;
              return e;
            })
        }
        setTime((e) => {
          e[1] = 59;
          return e;
        })
    }
}, 1000);
useEffect(() => {
  sendTime(time);
},[time]) */

  /*  */
  const style = {
    events: `pt-mainPadding pb-20 relative`,
    container: `gap-20 flex items-center flex-col py-mainPadding px-20`,
    container1: `w-full flex justify-center items-center gap-20 p-mainPadding`,
    image: `hidden lg:block w-[800px]`,
    img: `w-full`,
    dateText: `flex justify-center items-center flex-col gap-mainGap`,
    date: `flex gap-[14px]`,
    divDate: `flex justify-center items-center flex-col border-[1px] border-[#ddd] rounded-md transition-all duration-300 hover:border-mainColor [&:hover>.time]:border-mainColor`,
    number: `flex justify-center items-center text-3xl h-[70px] w-[75px] font-bold text-mainColor`,
    time: `time py-3 px-0 border-t-2 border-t-[#ddd] w-full text-center text-sm transition-all duration-300`,
    text: `text-center`,
    h2: `text-3xl mb-5 font-bold`,
    p: `text-[#777] text-lg`,
  }  
  const date = props.event.date.map((e, i) => {
    return (
      <div className={style.divDate} key={i}>
        <span className={style.number}>{e.number}</span>
        <span className={style.time}>{e.text}</span>
      </div>
    );
  });
  return (
    <div className={style.events} id={props.id}>
      <Title title={props.title} />
      <div className={style.container}>
        <div className={style.container1}>
          <div className={style.image}>
            <img className={style.img} src={props.img} alt="" />
          </div>
          <div className={style.dateText}>
            <div className={style.date}>{date}</div>
            <div className={style.text}>
              <h2 className={style.h2}>{props.event.title}</h2>
              <p className={style.p}>{props.event.p}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;


