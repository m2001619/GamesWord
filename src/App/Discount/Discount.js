import React, { Fragment, useState } from "react";

const Discount = ({ props, setTestimonials, sendData }) => {
  const [user, setUser] = useState({
    name: ``,
    email: ``,
    phone: ``,
    job: ``,
    text: ``,
    gender: ``,
  });
  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setUser((prevState) => ({ ...prevState, [key]: value }));
  };
  const onSubmitHandler = (e) => {
    const info = {
      stars: `1`,
    };
    info.name = user.name;
    info.job = user.job;
    info.text = user.text;
    info.gender = user.gender;
    setTestimonials((e) => {
      e.cards.push(info);
      sendData(e);
      console.log(e);
      return e;
    });
    e.preventDefault();
  };
  const bgImg = {
    backgroundImage: `url('${props.bgImg}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const outline = {
    outline: `none`,
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
  const inputs = props.form.inputs.map((e, i) => {
    const d = () => {
      if (e.id === `name`) return user.name;
      else if (e.id === `email`) return user.email;
      else if (e.id === `phone`) return user.phone;
      else {
        return user.job;
      }
    };
    return (
      <Fragment key={i}>
        <input
          value={d()}
          onChange={inputHandler}
          style={outline}
          className={style.inputAndTextArea}
          type={e.type}
          name={e.name}
          id={e.id}
          placeholder={e.placeholder}
        />
      </Fragment>
    );
  });
  return (
    <div className={style.discount} id={props.id}>
      <div className={style.haveADiscount} style={bgImg}>
        <span className={style.haveADiscountBefore}></span>
        <h3 className={style.h3}>{props.title}</h3>
        <p className={style.p}>{props.text}</p>
        <img className={style.img} src={props.img} alt="" />
      </div>
      <form className={style.requestADiscount} onSubmit={onSubmitHandler}>
        <h2 className={style.h2}>{props.form.title}</h2>
        {inputs}
        <div className="flex justify-between items-center w-72 mb-3">
          <div>
            <input type="radio" id="male" name="drone" value="male" onClick={(e) =>  user.gender = e.target.defaultValue} />
            <label htmlFor="male" className="ml-2">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="drone" value="female" onClick={(e) =>  user.gender = e.target.defaultValue}/>
            <label htmlFor="female" className="ml-2">Female</label>
          </div>
        </div>
        <textarea
          value={user.text}
          onChange={(e) => {
            setUser((prevState) => ({ ...prevState, text: e.target.value }));
          }}
          style={outline}
          className={style.inputAndTextArea}
          name={props.form.textArea.name}
          id={props.form.textArea.id}
          placeholder={props.form.textArea.placeholder}
          cols="30"
          rows="10"
        ></textarea>
        <input
          className={style.submit}
          type={props.form.submit.type}
          value={props.form.submit.value}
        />
      </form>
    </div>
  );
};

export default Discount;
