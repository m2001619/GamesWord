import React, { useContext, useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { context } from "../../App";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Input Component
const Input = ({ register, placeholder, type, name, rules }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        outline: `none`,
      }}
      className="border-0 border-b-[1px] border-b-[#ccc] w-72 p-4 mb-6 bg-[#f9f9f9] caret-mainColor"
      {...register(name, rules)}
    />
  );
};

// Form Component
const Form = ({ title }) => {
  const MySwal = withReactContent(Swal);
  const sendUserData = useContext(context).getUserData;
  const users = useContext(context).users;
  const [selected, setSelected] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: ``,
      phone: ``,
      email: ``,
      job: ``,
      gender: ``,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  useEffect(() => append({ skill: "" }), []);

  // Check Error In Form Function
  const checkErrorInForm = (data) => {
    const emails = users.map((e) => e.email);
    const phones = users.map((e) => e.phone);
    if (phones.includes(data.phone)) {
      return "phone number has been used by another account";
    } else if (emails.includes(data.email)) {
      return "email has been used by another account";
    }
  };

  // Success Submit
  const onSuccessSubmit = (data) => {
    data.skills = data.skills.map((e) => Object.values(e)[0]);
    if (checkErrorInForm(data)) {
      MySwal.fire("Error", checkErrorInForm(data), "error");
      return false;
    }
    sendUserData(data);
    reset();
    setSelected("");
    MySwal.fire("Completed", "you have login successfuly", "success");
    append({ skill: "" });
  };

  // Error Submit
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
          {errors.phone?.message}
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
      <ul className="w-72 flex flex-col p-3 mb-5 border-2 rounded-md">
        <label className="py-2 mb-3 ml-1">Add your hobbies</label>
        {fields.map((item, index) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <Controller
              rules={{ required: "Enter a skill" }}
              render={({ field }) => (
                <input
                  style={{ outline: `none` }}
                  className="border-0 border-b-[1px] border-b-[#ccc] w-44 p-4 bg-[#f9f9f9] caret-mainColor"
                  placeholder={"skill " + (index + 1)}
                  {...field}
                />
              )}
              name={`skills.${index}.skill`}
              control={control}
            />
            {index > 0 && (
              <button
                className="w-16 p-1 border-0 rounded-md bg-mainAltColor text-md cursor-pointer text-white"
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
        <button
          className="w-48 p-1 border-0 rounded-md mt-5 bg-mainAltColor text-lg cursor-pointer text-white font-bold"
          type="button"
          onClick={() => append({ skill: "" })}
        >
          Add another skill
        </button>
      </ul>
      <input
        className="bg-mainAltColor border-0 text-xl cursor-pointer text-white font-bold rounded-none p-4 w-72"
        type="submit"
      />
    </form>
  );
};

export default Form;
