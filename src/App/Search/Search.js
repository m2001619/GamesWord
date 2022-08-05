import React, { useEffect, useState } from "react";
import axios from "axios";
import usePrevState from "./hooks/usePrevState";
import Title from "../Global/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  const [term, setTerm] = useState("react");
  const [result, setResult] = useState([]);
  const prevState = usePrevState(term);
  const style = {
    article: `p-mainPadding`,
    searchDiv: `w-[100%] md:w-[600px] bg-[#f6f5f5] p-8 flex justify-center gap-3 rounded-0 md:rounded-[50px] flex-col md:flex-row mx-auto`,
    input: `w-full md:w-3/4 border-0 py-4 px-5 caret-mainColor rounded-none md:rounded-3xl transition-all duration-300 focus-visible:outline-[0px] focus-within:placeholder:text-white placeholder:transition-all placeholder:duration-300`,
    inputTitle: `font-bold`,
    container: `container flex justify-center gap-mainGap flex-wrap pt-mainPadding pb-mainPadding`,
    card: `flex flex-col w-64 shadow-[0_0px_10px_0px_#ddd] relative transition-all duration-300 hover:-translate-y-3 [&:hover>a>span]:right-1 [&:hover>a>span]:animate-next`,
    image: `rounded-[5px_5px_0px_0px]`,
    cardText: `p-5 border-b-[1px] border-b-[#ddd] h-72`,
    h3: `font-bold`,
    text: `mt-3 text-[#777] leading-relaxed`,
    readMore: `py-4 px-5 text-mainAltColor font-bold relative rounded-[0px_0px_5px_5px] `,
    readMoreAfter: `text-lg absolute right-5 top-1/2 -translate-y-1/2`,
  };

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(respond.data.query.search);
    };

    if (!result.length) {
      if (term) {
        search();
      }
    } else if (term !== prevState) {
      const debounceSearch = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1500);

      return () => {
        clearTimeout(debounceSearch);
      };
    }
  }, [term, result.length, prevState]);

  const fetchResult = result.map((e, i) => {
    const href = `https://en.wikipedia.org/wiki/${e.title.split(` `).join(`_`)}`;
    return (
      <div className={style.card} key={i}>
        <img
          className={style.image}
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tGamDmzSv_01l1hrqjuPLGlrgHKIcUqVvg&usqp=CAU"}
          alt=""
        />
        <div className={style.cardText}>
          <h3 className={style.h3}>{e.title}</h3>
          <p className={style.text}>
            <span dangerouslySetInnerHTML={{ __html: e.snippet }} />
          </p>
        </div>
        <a className={style.readMore} href={href} target="_blank">
          <span className={style.readMoreAfter}>
            <FontAwesomeIcon icon={faRightLong} />
          </span>
          Read More
        </a>
      </div>
    );
  });


  return (
    <div className={style.article} id="search">
      <Title title={"Search"} />
      <div className={style.searchDiv}>
        <span className={style.inputTitle}>Search In Wikipedia</span>
        <input
          type="text"
          className={style.input}
          id="exampleFormControllerInput1"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
      <div className={style.container}>{fetchResult}</div>
    </div>
  );
};

export default Search;
