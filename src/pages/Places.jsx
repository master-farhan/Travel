import PlacesCard from "../components/PlacesCard";

const Places = ({ handleOrderPopup }) => {
  const PlacesData = [
    {
      url: "https://www.usatoday.com/gcdn/-mm-/1c199126b5b40b20c04397b562be90df0691a17b/c=0-197-2048-1352/local/-/media/USATODAY/USATODAY/2014/06/02//1401725099000-Best-US-Boat-Ride1.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
      title: "Boat Tour",
      location: "USA",
      description: "Explore serene lakes and rivers on a peaceful boat tour.",
      price: 100,
      type: "Cultural Relax",
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/50/57/2d/caption.jpg?w=800&h=500&s=1&cx=1728&cy=1152&chk=v1_c3b95e04b02f1c246e25",
      title: "Desert Safari",
      location: "UAE",
      description: "An adrenaline-packed adventure through golden dunes.",
      price: 150,
      type: "Adventure",
    },
    {
      url: "https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2013/11/wine-tasting-5.jpg?w=550&ssl=1",
      title: "Wine Tasting",
      location: "France",
      description: "Enjoy exquisite wines in the heart of Bordeaux.",
      price: 200,
      type: "Cultural Relax",
    },
    {
      url: "https://italiantourism.us/wp-content/uploads/2021/07/italian-tourism-escorted-italy-tours-with-airfare.webp",
      title: "City Tour",
      location: "Italy",
      description: "Explore historic streets and iconic landmarks of Rome.",
      price: 80,
      type: "Cultural",
    },
    {
      url: "https://cdn.kimkim.com/files/a/images/c8ffc4cc8c4e2a331171def4ba320a8477449116/big-898ae8a892b7e5e924bfb9a035d8b98e.jpg",
      title: "Jungle Trek",
      location: "Brazil",
      description: "Experience the wonders of the Amazon rainforest.",
      price: 170,
      type: "Adventure Nature",
    },
    {
      url: "https://lp-cms-production.imgix.net/2025-04/Shutterstock374175955.jpg?auto=format,compress&q=72&w=768&h=810&fit=crop",
      title: "Temple Visit",
      location: "India",
      description: "Discover ancient temples rich in history and culture.",
      price: 60,
      type: "Cultural",
    },
    {
      url: "https://images.blacktomato.com/2024/11/Northern-Lights-672b3a8f97a16.jpg?auto=compress%2Cformat&fit=crop&h=1700&ixlib=php-3.3.1&q=82&w=1668&s=a16b2728db3b6f8ca270e91ce1599c76",
      title: "Northern Lights Tour",
      location: "Iceland",
      description:
        "Witness the magic of the aurora borealis in the Arctic sky.",
      price: 300,
      type: "Relax Nature",
    },
    {
      url: "https://www.masaimara.travel/images/gamedrive%20vehicles%20kenya.jpg",
      title: "Safari Drive",
      location: "Kenya",
      description: "Spot the Big Five in their natural savannah habitat.",
      price: 250,
      type: "Adventure Nature",
    },
    {
      url: "https://www.gokitetours.com/wp-content/uploads/2024/01/1-Palawan-Island-Circuit-1024x423.webp",
      title: "Island Hopping",
      location: "Philippines",
      description: "Visit beautiful tropical islands with white sandy beaches.",
      price: 130,
      type: "Relax Adventure",
    },
    // {
    //   url: "",
    //   title: "Cave Exploration",
    //   location: "Vietnam",
    //   description:
    //     "Explore magnificent limestone caves and underground rivers.",
    //   price: 90,
    //   type: "Adventure",
    // },
    // {
    //   url: "",
    //   title: "Snowboarding Trip",
    //   location: "Canada",
    //   description: "Hit the snowy slopes and enjoy thrilling snowboarding.",
    //   price: 180,
    //   type: "Adventure",
    // },
    // {
    //   url: "",
    //   title: "Hot Air Balloon Ride",
    //   location: "Turkey",
    //   description: "Enjoy panoramic views of Cappadocia from the skies.",
    //   price: 220,
    //   type: "Relax Nature",
    // },
    // {
    //   url: "",
    //   title: "Historical Castle Tour",
    //   location: "Germany",
    //   description: "Tour fairy-tale castles full of rich history and legend.",
    //   price: 110,
    //   type: "Cultural",
    // },
    // {
    //   url: "",
    //   title: "Deep Sea Diving",
    //   location: "Australia",
    //   description:
    //     "Discover the colorful marine life of the Great Barrier Reef.",
    //   price: 300,
    //   type: "Adventure Nature",
    // },
    // {
    //   url: "",
    //   title: "Cultural Dance Show",
    //   location: "Thailand",
    //   description: "Enjoy traditional performances with local cuisine.",
    //   price: 75,
    //   type: "Cultural Relax",
    // },
    // {
    //   url: "",
    //   title: "Glacier Walk",
    //   location: "New Zealand",
    //   description: "Walk across ancient ice fields and dramatic landscapes.",
    //   price: 190,
    //   type: "Adventure Nature",
    // },
    // {
    //   url: "",
    //   title: "Surfing Camp",
    //   location: "Indonesia",
    //   description: "Ride world-class waves with professional instructors.",
    //   price: 140,
    //   type: "Adventure",
    // },
    // {
    //   url: "",
    //   title: "Countryside Retreat",
    //   location: "UK",
    //   description: "Relax in the peaceful countryside and enjoy nature walks.",
    //   price: 95,
    //   type: "Relax Nature",
    // },
    // {
    //   url: "",
    //   title: "Museum Pass",
    //   location: "Netherlands",
    //   description:
    //     "Access world-renowned museums and art galleries in Amsterdam.",
    //   price: 85,
    //   type: "Cultural",
    // },
  ];

  return (
    <div className="bg-grow py-10 px-5 sm:px-10 lg:px-30 sm:pt-25 mb-20">
      <div className="">
        <h1
          data-aos="fade-up"
          className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold "
        >
          Best Places to Visit
        </h1>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {PlacesData.map((item, index) => {
            return (
              <PlacesCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Places;
