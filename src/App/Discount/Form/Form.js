import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { context } from "../../App";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Input = ({ register, placeholder, type, name, rules }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        outline: `none`,
      }}
      className="border-0 bg-[#f9f9f9] p-4 w-72 border-b-[1px] border-b-[#ccc] mb-6 caret-mainColor"
      {...register(name, rules)}
    />
  );
};

const Form = ({ title }) => {
  const MySwal = withReactContent(Swal);
  const sendUserData = useContext(context).getUserData;
  const users = useContext(context).users;
  const emails = users.map((e) => e.email);
  const phones = users.map((e) => e.phone);
  const [textArea, setTextArea] = useState("");
  const [selected, setSelected] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: ``,
      phone: ``,
      email: ``,
      job: ``,
      gender: ``,
      text: textArea,
    },
  });
  const checkPhone = (phone) => phones.includes(phone);
  const checkEmail = (email) => emails.includes(email);
  const checkForm = (data) => {
    if (checkPhone(data.phone)) {
      return "phone number has been used by another account";
    } else if (checkEmail(data.email)) {
      return "email has been used by another account";
    }
  };
  const onSuccessSubmit = (data) => {
    if (checkForm(data)) {
      MySwal.fire("Error", checkForm(data), "error");
      return false;
    }
    data.text = textArea;
    sendUserData(data);
    reset();
    setSelected("");
    MySwal.fire("Completed", "you have login successfuly", "success");
  };
  const onErrorSubmit = () => {
    console.log(errors);
  };
  return (
    <form
      className="w-full lg:w-1/2 py-20 px-0 flex justify-center items-center flex-col"
      onSubmit={handleSubmit(onSuccessSubmit, onErrorSubmit)}
    >
      <h2 className="text-3xl mb-9 relative font-bold">{title}</h2>
      <div className="relative mb-2">
        <Input
          placeholder="Full Name"
          type="text"
          name="name"
          rules={{
            required: {
              value: true,
              message: "Fill the input, please",
            },
            pattern: {
              value: /\w+\s\w+/,
              message: `You should enter your full name`,
            },
          }}
          register={register}
        />
        <p className="absolute bottom-1 text-sm text-red-700">
          {errors.name?.message}
        </p>
      </div>
      <div className="relative mb-2">
        <Input
          placeholder="Your email"
          type="email"
          name="email"
          rules={{
            required: {
              value: true,
              message: "Fill the input, please",
            },
            pattern: {
              value: /\w+@\w+\.\w+/,
              message: `Enter real email : exp@aa.aa`,
            },
          }}
          register={register}
        />
        <p className="absolute bottom-1 text-sm text-red-700">
          {errors.email?.message}
        </p>
      </div>
      <div className="relative mb-2">
        <Input
          placeholder="Your phone"
          type="tel"
          name="phone"
          rules={{
            required: {
              value: true,
              message: "Fill the input, please",
            },
            pattern: {
              value: /5\d{9}/,
              message: `this is invalid number`,
            },
            maxLength: {
              value: 10,
              message: "this is invalid number",
            },
          }}
          register={register}
        />
        <p className="absolute bottom-1 text-sm text-red-700">
          {errors.email?.message}
        </p>
      </div>
      <div className="relative mb-2">
        <select
          style={{
            outline: `none`,
          }}
          value={selected}
          className="border-0 bg-[#f9f9f9] p-4 w-72 border-b-[1px] border-b-[#ccc] mb-6 caret-mainColor"
          {...register("job", {
            required: {
              value: true,
              message: "Select your Job",
            },
            onChange: (e) => {
              setSelected(e.target.value);
            },
          })}
        >
          <option disabled={true} hidden={true} value="">
            Select Job
          </option>
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="JavaScript devoloper">JavaScript Developer</option>
        </select>
        <p className="absolute bottom-1 text-sm text-red-700">
          {errors.job?.message}
        </p>
      </div>
      <div className="flex items-center w-72 mb-5 relative">
        <label htmlFor="male" className="ml-2 flex items-center gap-1">
          <input
            value="male"
            {...register("gender", {
              required: {
                value: true,
                message: `select your gender`,
              },
            })}
            type="radio"
            id="male"
          />
          Male
        </label>
        <label htmlFor="female" className="ml-2 flex items-center gap-1">
          <input
            value="female"
            {...register("gender", {
              value: "female",
              required: {
                value: true,
                message: `select your gender`,
              },
            })}
            type="radio"
            id="female"
          />
          Female
        </label>
        <p className="absolute -bottom-5 text-sm text-red-700">
          {errors.gender?.message}
        </p>
      </div>
      <textarea
        {...register("text", {
          value: textArea,
          onChange: (e) => {
            setTextArea(e.target.value);
          },
        })}
        style={{
          outline: `none`,
        }}
        className="border-0 bg-[#f9f9f9] p-4 w-72 border-b-[1px] border-b-[#ccc] mb-6 caret-mainColor"
        placeholder="Tell Us About You"
        cols="30"
        rows="10"
      ></textarea>
      <input
        className="bg-mainAltColor border-0 text-xl cursor-pointer text-white font-bold rounded-none p-4 w-72"
        type="submit"
      />
    </form>
  );
};

export default Form;
