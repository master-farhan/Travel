import NatueVid from "../assets/NatureVid.mp4";
import BannerImg from "../components/banner/BannerImg";
import Hero from "../components/hero/Hero";
import Places from "../components/Places";
import coverImg from "../assets/coverImg.jpg";
import coverImg2 from "../assets/coverImg2.jpg";
import Blogs from "./Blogs";
import Banner from "../components/banner/Banner";
import Testimonial from "../components/testimonial/Testimonial";
import Footer from "../components/foter/Footer";

const Home = () => {
  return (
    <div className="relative h-[650px] w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full -z-1 top-0 left-0 object-cover"
      >
        <source src={NatueVid} />
      </video>
      <div className="bg-primary/20 h-full w-full ">
        <Hero />
      </div>
      <Places />
      <BannerImg img={coverImg} />
      <Blogs />
      <Banner />
      <BannerImg img={coverImg2} />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
