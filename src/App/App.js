import React, { useEffect, useState } from "react";
import json from './.json';
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


function App() {
  const [header, setHeader] = useState(json.header);
  const [landing, setLanding] = useState(json.landing);
  const [article, setArticle] = useState(json.article);
  const [gallery, setGallery] = useState(json.gallery);
  const [features, setFeatures] = useState(json.features);
  const [testimonials, setTestimonials] = useState(json.testimonials);
  const [games, setGames] = useState(json.games);
  const [services, SetServices] = useState(json.services);
  const [ourSkills, setOurSkills] = useState(json.ourSkills);
  const [howItWork, setHowItWork] = useState(json.howItWork);
  const [events, setEvents] = useState(json.events);
  const [pricingPlans, setPricingPlans] = useState(json.pricingPlans);
  const [topVideos, setTopVideos] = useState(json.topVideos);
  const [awesomeStats, setAwesomeStats] = useState(json.awesomeStats);
  const [discount, setDiscount] = useState(json.discount);
  const [footer, setFooter] = useState(json.footer);
  
  const [render, setRender] = useState(true);
  const getDate = (data) => {
    if(data){
      setTestimonials(data);
    }
    setRender((e) => !e);
    return testimonials;
  }
  useEffect(() => {},[render]);


  return (
    <div className="App">
      <Header props={header} />
      <Landing props={landing} />
      <Search/>
      <Articles props={article} />
      <Gallery props={gallery} />
      <Features props={features} />
      <Testimonials props={testimonials} />
      <Games props={games} />
      <Services props={services} />
      <OurSkills props={ourSkills} />
      <HowItWork props={howItWork} />
      <Events props={events} setEvents={setEvents}/>
      <PricingPlans props={pricingPlans} />
      <TopVideos props={topVideos} />
      <AwesomeStats props={awesomeStats} />
      <Discount props={discount} setTestimonials={setTestimonials} sendData={getDate} />
      <Footer props={footer} />
    </div>
  );
}

export default App;
