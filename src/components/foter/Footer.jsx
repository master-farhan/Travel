import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Blogs",
      link: "/blogs",
    },
    {
      id: 4,
      title: "Best Places",
      link: "/places",
    },
  ];

  return (
    <div className="px-5 py-10 md:px-10 md:py-15 lg:px-30 relative overflow-hidden  bg-primary/10">
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full -z-1 top-0 left-0 object-cover overflow-hidden"
      >
        <source src="https://videos.pexels.com/video-files/1994829/1994829-hd_1920_1080_24fps.mp4" />
      </video>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 py-5 bg-white backdrop:backdrop-blur-3xl rounded-t-2xl">
          <div className="px-10">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font text-justify sm:text-left">
              <h2 className="text-primary font-mono tracking-tight text-2xl font-bold">ChillTrip</h2>
            </h1>
            <p className="text-sm pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              adipisci sunt odio, praesentium dignissimos neque, omnis quia
              architecto quidem doloribus id autem amet nulla
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Dhaka Uttora</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+880 1703202276</p>
            </div>
            {/* Social */}
            <div className="">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* Footer links */}
          <div className="px-10 sm:pl-0 md:pl-10 pt-5 grid grid-cols-2 gap-5 lg:gap-10">
            {/* 1st col */}
            <div>
              <div className="">
                <h1 className="text-lg md:text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLinks.map(({ id, title, link }) => {
                    return (
                      <li key={id} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700 py-2">
                        <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                          <span>&#11162;</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* 2nd col */}
            <div>
              <div className="">
                <h1 className="text-lg md:text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLinks.map(({ id, title, link }) => {
                    return (
                      <li key={id} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700 py-2">
                        <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                          <span>&#11162;</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="">
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white rounded-b-2xl">
            @Copyright 2025 All rights reserved || Made with ❤ by Farhan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
