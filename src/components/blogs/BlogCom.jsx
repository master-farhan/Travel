import BlogsCard from "./BlogsCard";

const BlogCom = () => {
  const BlogsData = [
    {
      id: 1,
      url: "https://tripjive.com/wp-content/uploads/2024/11/What-are-some-hidden-gems-off-the-beaten-path-in-Sylhet-1024x585.jpg",
      title: "Exploring the Hidden Gems of Sylhet",
      description:
        "Sylhet, located in the northeastern region of Bangladesh, offers an enchanting mix of rolling tea gardens, crystal-clear waterfalls, and spiritual shrines. Tourists often find peace at places like Ratargul Swamp Forest, Jaflong, and Lalakhal. The green expanse, serene rivers, and welcoming locals make Sylhet a must-visit for nature lovers and cultural explorers. Whether you’re sipping tea in a hillside bungalow or cruising the blue-green rivers, Sylhet has something magical for every traveler.",
      author: "Johan Uddin",
      date: "June, 2025",
    },
    {
      id: 2,
      url: "https://tripjive.com/wp-content/uploads/2024/09/Coxs-Bazar-Itinerary-5-Days-1024x585.jpg",
      title: "A Traveler’s Guide to Cox’s Bazar Beach",
      description:
        "Cox’s Bazar is home to the world’s longest uninterrupted sandy beach. Stretching over 120 km, it’s a paradise for beach lovers, surfers, and seafood enthusiasts. The golden sands and stunning sunsets create the perfect backdrop for relaxation. Don’t miss the nearby Himchari Waterfall or the peaceful Inani Beach. For adventure seekers, beach biking and parasailing offer excitement. With a wide range of resorts and fresh coastal cuisine, Cox’s Bazar is a highlight on any Bangladesh itinerary.",
      author: "MD Raju",
      date: "March, 2025",
    },
    {
      id: 3,
      url: "https://tripjive.com/wp-content/uploads/2024/11/Dhaka-historical-sites-guide-1024x585.jpg",
      title: "Top Historical Sites to Visit in Dhaka",
      description:
        "Dhaka, the capital of Bangladesh, is a treasure trove of history and culture. From the majestic Lalbagh Fort to the architectural beauty of Ahsan Manzil, history comes alive around every corner. The Star Mosque and Armenian Church showcase the city's diverse religious past. Strolling through Old Dhaka’s narrow lanes reveals stories of Mughal emperors, colonial powers, and revolutionaries. A visit to the Liberation War Museum is a must to understand the nation’s journey. Dhaka is truly a city where the past and present blend seamlessly.",
      author: "Arman Hossain",
      date: "May, 2025",
    },
  ];

  return (
    <div className="px-5 sm:px-10 lg:px-30 py-10">
      <div  className="">
        <h1 data-aos="fade-up" className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold ">
          Our Latest Blogs
        </h1>
        <div data-aos="fade-up" className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3">
          {BlogsData.map((item, index) => {
            return <BlogsCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCom;
