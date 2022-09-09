import React, { Fragment } from "react";
import { borderWidth, classnames, textColor } from "tailwindcss-classnames";

const Title = ({ title }) => {
  const beforeAfter = {
    "absolute w-3 h-3 bg-mainColor top-1/2 rounded-[50%] -translate-y-1/2 transition-all duration-700": true,
  };

  return (
    <Fragment>
      <h2
        className={classnames(
          textColor("hover:text-white"),
          borderWidth("border-2", "hover:border-0"),
          "w-max relative z-10 my-10 mx-auto py-4 px-6 border-black font-bold text-2xl transition-all duration-700",
          "[&:hover>*]:top-0 [&:hover>*]:w-1/2 [&:hover>*]:h-full [&:hover>*]:-z-10 [&:hover>*]:translate-y-0 [&:hover>*]:rounded-none",
          "[&:hover>.before]:left-0",
          "[&:hover>.after]:right-0"
        )}
      >
        <span className={classnames(beforeAfter, "-left-4", "before")}></span>
        {title}
        <span className={classnames(beforeAfter, "-right-4", "after")}></span>
      </h2>
    </Fragment>
  );
};

export default React.memo(Title);
