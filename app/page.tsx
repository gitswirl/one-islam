// components/home/page.ts

"use client";
import React, { useEffect } from "react";

// components
import CustomCursor from "./@components/cursor/page";
import Navigation from "./@components/navbar/page";
import Hero from "./@components/hero/page";
import LinkSlides from "./@components/linkslides/page";
import QuranicAbout from "./@components/QuranicAbout/page";
import HadithAbout from "./@components/HadithAbout/page";
import AboutUs from "./@components/aboutUs/page";
import PricingDonate from "./@components/pricing/page";
import Reviews from "./@components/reviews/page";
import JoinComunity from "./@components/joinComunity/page";
import Footer from "./@components/footer/page";

const Home: React.FC = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      /*---*/
      const locomotivescroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 30,
          duration: 1,
        },
      });
      /*---*/
    })();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <Hero />
      <LinkSlides />
      <QuranicAbout />
      <HadithAbout />
      <AboutUs />
      <PricingDonate />
      <Reviews />
      <JoinComunity />
      <Footer />
    </>
  );
};

export default Home;
