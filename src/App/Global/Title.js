import React, { Fragment } from 'react';

const Title = ({title}) => {
  const style = {
    title : `my-10 mx-auto border-2 border-black w-max py-4 px-6 font-bold text-2xl relative z-10 transition-all duration-700 hover:text-white hover:border-0 [&:hover>*]:top-0 [&:hover>*]:w-1/2 [&:hover>*]:h-full [&:hover>*]:-z-10 [&:hover>*]:translate-y-0 [&:hover>*]:rounded-none [&:hover>.before]:left-0 [&:hover>.after]:right-0`,

    titleBefore : `before absolute w-3 h-3 bg-mainColor top-1/2 rounded-[50%] -translate-y-1/2 transition-all duration-700 -left-4`,

    titleAfter: `after absolute w-3 h-3 bg-mainColor top-1/2 rounded-[50%] -translate-y-1/2 transition-all duration-700 -right-4`,
  }  
  return (
    <Fragment>
        <h2 className={style.title}>
            <span className={style.titleBefore}></span>
            {title}
            <span className={style.titleAfter}></span>
        </h2>
    </Fragment>
  )
}

export default Title;
