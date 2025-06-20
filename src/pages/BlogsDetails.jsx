import { useLocation } from "react-router-dom";
import BlogCom from "../components/blogs/BlogCom";

const BlogsDetails = () => {
  const location = useLocation();
  const { url, date, title, description, author } = location.state;

  return (
    <div className=" pb-20 min-h-[550px] pt-30">
      <div className="px-5 sm:px-10 lg:px-30 h-[300px] lg:h-[350px] overflow-hidden">
        <img
          src={url}
          alt=""
          className="mx-auto h-full  w-full object-cover transition duration-700 hover:scale-110 object-center"
        />
      </div>

      <div className="px-5 sm:px-10 lg:px-30">
        <p className="text-back/80 pb-3">
          Write by {author} on date {date}
        </p>
        <h1 className="text-2xl pb-1 font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      <BlogCom />
    </div>
  );
};

export default BlogsDetails;
