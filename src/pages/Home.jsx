import BannerImg from "../components/banner/BannerImg";
import Hero from "../components/hero/Hero";
import Places from "./Places";
import Blogs from "./Blogs";
import Banner from "../components/banner/Banner";
import Testimonial from "../components/testimonial/Testimonial";
import React from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { handleOrderPopup } = useOutletContext();
  return (
    <div className="h-auto">
      <div className="relative h-[650px] w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute h-full w-full -z-1 top-0 left-0 object-cover"
        >
          <source
            src={
              "https://videos.pexels.com/video-files/3576378/3576378-uhd_2560_1440_25fps.mp4"
            }
          />
        </video>
        <div className="bg-primary/10 h-full w-full ">
          <Hero />
        </div>
      </div>
      <Places handleOrderPopup={handleOrderPopup} />
      <BannerImg
        img={
          "https://www.kindpng.com/picc/m/22-225723_travel-agency-hd-png-download.png"
        }
      />
      <Blogs />
      <Banner />
      <BannerImg
        img={"https://freepngimg.com/thumb/travel/30765-3-travel-photos.png"}
      />
      <Testimonial />
    </div>
  );
};

export default Home;
