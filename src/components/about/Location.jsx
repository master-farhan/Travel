import React from "react";

const Location = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1
            data-aos="fade-up"
            className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
          >
            Location to visit
          </h1>
          <div className="rounded pb-10" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58890.17229524954!2d89.05909544321257!3d22.704599091236528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff5dd8cc387413%3A0xf05c8c2849c76277!2sSatkhira!5e0!3m2!1sen!2sbd!4v1750410501606!5m2!1sen!2sbd"
              frameborder="0"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                borderRadius: "20px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
