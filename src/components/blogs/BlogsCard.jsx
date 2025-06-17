import { Link } from "react-router-dom";

const BlogsCard = ({ url, date, title, description, author }) => {
  return (
    <Link
      to={`/blogs/${title}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      state={{ url, date, title, description, author }}
    >
      <div className="py-4 shadow-lg transition-all duration-500 hover:shadow-xl">
        <div className="overflow-hidden">
          <img
            src={url}
            className="mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110"
            alt={title}
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600 px-2">
          <p className="">{date}</p>
          <p className="">By {author}</p>
        </div>
        <div className="space-y-2 py-3 px-2">
          <h2 className="line-clamp-1 font-bold">{title}</h2>
          <p className="line-clamp-2">{description.slice(0, 150)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
