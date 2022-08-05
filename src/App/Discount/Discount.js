import React from "react";
import Form from "./Form/Form"

const Discount = ({ props}) => {
  const bgImg = {
    backgroundImage: `url('${props.bgImg}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const style = {
    discount: `flex flex-wrap min-h-screen`,
    haveADiscount: `w-full lg:w-1/2 py-5 lg:py-0 px-0 text-white relative flex justify-center items-center flex-col`,
    haveADiscountBefore: `absolute bg-[#2094f3f7] w-full h-full left-0 top-0`,
    h3: `text-4xl relative font-bold`,
    p: `p-mainPadding text-center text-xl relative`,
    img: `w-72 relative`,
    requestADiscount: `w-full lg:w-1/2 py-20 px-0 flex justify-center items-center flex-col`,
    h2: `text-3xl mb-9 relative font-bold`,
    inputAndTextArea: `border-0 bg-[#f9f9f9] p-4 w-72 border-b-[1px] border-b-[#ccc] mb-6 caret-mainColor`,
    submit: `bg-mainAltColor border-0 text-xl cursor-pointer text-white font-bold rounded-none p-4 w-72`,
  };

  return (
    <div className={style.discount} id={props.id}>
      <div className={style.haveADiscount} style={bgImg}>
        <span className={style.haveADiscountBefore}></span>
        <h3 className={style.h3}>{props.title}</h3>
        <p className={style.p}>{props.text}</p>
        <img className={style.img} src={props.img} alt="" />
      </div>
      <Form title={props.form.title}/>
    </div>
  );
};

export default Discount;
