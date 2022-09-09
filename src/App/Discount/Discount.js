import React from "react";
import Form from "./Form/Form";
import { classnames, width, padding } from "tailwindcss-classnames";

const Discount = ({ props }) => {
  console.count("Re-render Discount");

  return (
    <div
      className="min-h-screen flex flex-wrap bg-cover bg-no-repeat"
      id={props.id}
    >
      <div
        className={classnames(
          width("w-full", "lg:w-1/2"),
          padding("py-5", "lg:py-0", "px-0"),
          "relative flex justify-center items-center flex-col text-white"
        )}
        style={{ backgroundImage: `url('${props.bgImg}')` }}
      >
        <span className="w-full h-full absolute left-0 top-0 bg-[#2094f3f7]"></span>
        <h3 className="relative text-4xl font-bold">{props.title}</h3>
        <p className="relative p-mainPadding text-center text-xl">
          {props.text}
        </p>
        <img className="w-72 relative" src={props.img} alt="" />
      </div>
      <Form title={props.form.title} />
    </div>
  );
};

export default React.memo(Discount);
