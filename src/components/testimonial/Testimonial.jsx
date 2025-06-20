import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat culpa eligendi ipsum consequuntur provident officia cum.",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Raouel ark",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat culpa eligendi ipsum consequuntur provident officia cum.",
      img: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Sana wal",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat culpa eligendi ipsum consequuntur provident officia cum.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Ridha",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat culpa eligendi ipsum consequuntur provident officia cum.",
      img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Washem",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat culpa eligendi ipsum consequuntur provident officia cum.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 overflow-x-hidden">
      <div className="py-10 px-5 sm:px-10 lg:px-30">
        {/* header section */}
        <div className="text-center mb-10 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-grow/50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            cumque velit, tempora consequatur ipsam consectetur unde, reiciendis
            nisi ex officia quam, nostrum mollitia. Atque, neque.
          </p>
        </div>
        {/* tesmonial section */}
        <Slider {...settings} >
          {TestimonialData.map((data) => {
            return (
              <div key={data.id} className="my-6 px-4">
                <div className="bg-secondary/10 p-6 rounded shadow-md justify-center flex flex-col items-center relative text-center gap-5 mx-5">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="mx-auto w-34 h-34 object-cover rounded-full  shadow-sm shadow-primary border-primary"
                  />
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-500 text-sm">{data.text}</p>
                  <p className="absolute text-black/20 text-9xl font-serif top-10 right-0">,,</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
