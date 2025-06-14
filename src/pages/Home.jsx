import NatueVid from "../assets/NatureVid.mp4";
import Hero from "../components/hero/Hero";
import Places from "../components/Places";

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
      <div className="bg-black/10 h-full w-full ">
        <Hero />
      </div>
      <Places />
    </div>
  );
};

export default Home;
