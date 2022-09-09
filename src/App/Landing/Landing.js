import React from "react";
import {
  classnames,
  textAlign,
  fontSize,
  margin,
  display,
} from "tailwindcss-classnames";

const Landing = ({ props }) => {
  console.count("Re-render Landing");

  return (
    <div className="landing relative">
      <span className="h-full w-full absolute top-0 left-0 -z-10 bg-[#ececec] -skew-y-6 origin-top-left"></span>
      <div className="container min-h-screen flex items-center pb-28">
        <div
          className={classnames(
            "flex-1",
            textAlign("text-center", "lg:text-left")
          )}
        >
          <h2
            className={classnames(
              "mb-2 font-bold tracking-tighter",
              fontSize("text-3xl", "md:text-4xl")
            )}
          >
            {props.h2}
          </h2>
          <p
            className={classnames(
              "max-w-lg text-[#777] leading-relaxed",
              margin("my-3", "sm:my-0", "mx-auto", "lg:mx-0"),
              fontSize("text-lg", "md:text-2xl")
            )}
          >
            {props.p}
          </p>
        </div>
        <div>
          <img
            className={classnames(
              "relative w-[600px] animate-upAndDown",
              display("hidden", "lg:block")
            )}
            src={props.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Landing);
