import React, { useEffect, useState } from "react";
import Title from "../Global/Title";
import { classnames, display, borderColor } from "tailwindcss-classnames";

const Events = ({ props }) => {
  console.count("Re-render Event");
  const [second, setSecond] = useState(props.event.date[3].number);
  const [minute, setMinute] = useState(props.event.date[2].number);
  const [hour, setHour] = useState(props.event.date[1].number);
  const [day, setDay] = useState(props.event.date[0].number);

   useEffect(() => {
    const secondInterval = setInterval(() => {
      if(second === 0 & minute === 0 & hour === 0 & day ===0){
        clearInterval(secondInterval);
      } else {
        if (second > 0) {
          setSecond((prevState) => --prevState);
        } else {
          setSecond(59);
          if (minute > 0) {
            setMinute((prevState) => --prevState);
          } else {
            setMinute(59);
            if (hour > 0) {
              setHour((prevState) => --prevState);
            } else {
              setHour(23);
              if (day > 0) {
                setDay((prevState) => --prevState);
              }
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(secondInterval);
  }, [second, minute]);

  // Date Cards
  const date = props.event.date.map((e, i) => {
    return (
      <div
        className={classnames(
          borderColor("border-[#ddd]", "hover:border-mainColor"),
          "[&:hover>.time]:border-mainColor",
          "flex flex-col justify-center items-center border-[1px] rounded-md transition-all duration-300"
        )}
        key={i}
      >
        <span className="h-[70px] w-[75px] flex justify-center items-center font-bold text-3xl text-mainColor">
          {i === 0
            ? day > 9
              ? day
              : `0${day}`
            : i === 1
            ? hour > 9
              ? hour
              : `0${hour}`
            : i === 2
            ? minute > 9
              ? minute
              : `0${minute}`
            : second > 9
            ? second
            : `0${second}`}
        </span>
        <span className="time w-full py-3 px-0 border-t-2 border-t-[#ddd] text-center text-sm transition-all duration-300">
          {e.text}
        </span>
      </div>
    );
  });

  return (
    <div className="relative pt-mainPadding pb-20" id={props.id}>
      <Title title={props.title} />
      <div className="flex items-center flex-col gap-20 py-mainPadding px-20">
        <div className="w-full flex justify-center items-center gap-20 p-mainPadding">
          <div
            className={classnames(display("hidden", "lg:block"), "w-[800px]")}
          >
            <img className="w-full" src={props.img} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center gap-mainGap">
            <div className="flex gap-[14px]">{date}</div>
            <div className="text-center">
              <h2 className="text-3xl mb-5 font-bold">{props.event.title}</h2>
              <p className="text-[#777] text-lg">{props.event.p}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Events);
