import React, {createContext, useState} from "react";
import json from "./.json";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Articles from "./Articles/Articles";
import Gallery from "./Gallery/Gallery";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";
import Games from "./Games/Games";
import Services from "./Services/Services";
import OurSkills from "./OurSkills/OurSkills";
import HowItWork from "./HowItWork/HowItWork";
import Events from "./Events/Events";
import PricingPlans from "./PricingPlans/PricingPlans";
import TopVideos from "./TopVideos/TopVideos";
import AwesomeStats from "./AwesomeStats/AwesomeStats";
import Discount from "./Discount/Discount";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";

export const context = createContext(null);

function App() {
  console.count("Re-render App");
  const [users, setUsers] = useState(json.users);
  const [render, setRender] = useState(true);


  const getUserData = (data) => {
    setUsers((prevState) => {
      prevState.push({...data, stars: 1});
      return prevState;
    });
    setRender((e) => !e);
  };


  return (
    <context.Provider
      value={{ getUserData: getUserData, users: users}}
      className="App"
    >
      <Header props={json.header} />
      <Landing props={json.landing} />
      <Search/>
      <Articles props={json.article} />
      <Gallery props={json.gallery} />
      <Features props={json.features} />
      <Testimonials props={json.testimonials} />
      <Games props={json.games} />
      <Services props={json.services} />
      <OurSkills props={json.ourSkills} />
      <HowItWork props={json.howItWork} />
      <Events props={json.events} />
      <PricingPlans props={json.pricingPlans} />
      <TopVideos props={json.topVideos} />
      <AwesomeStats props={json.awesomeStats} />
      <Discount props={json.discount} />
      <Footer props={json.footer} />
    </context.Provider>
  );
}

export default App;
