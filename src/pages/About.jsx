import React from "react";
import Location from "../components/about/Location";

const About = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-30 pt-5 sm:pt-14">
      <div className="py-10">
        <h1
          data-aos="fade-up"
          className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
        >
          About Us
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          beatae sit praesentium incidunt at deserunt qui optio cumque enim
          repellendus illo iste repudiandae quam blanditiis id iusto ratione!
          Ea, quibusdam! Velit perspiciatis autem deleniti quia atque sit totam
          adipisci ullam sunt, alias porro at, cum expedita eius eligendi
          aliquam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat consequatur dicta assumenda natus reprehenderit optio sequi
        </p>
        <br />
        <p data-aos="fade-up">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          consectetur magnam doloremque vitae ut laboriosam saepe at blanditiis
          porro sed facere provident alias aperiam eligendi iste ipsa ea nostrum
          dolorum, commodi esse minima et repudiandae ducimus quae. Accusamus
          sapiente porro vel neque atque voluptatem deserunt inventore quae!
          Quos, voluptas dicta.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
